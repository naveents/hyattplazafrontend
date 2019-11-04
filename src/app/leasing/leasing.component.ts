import { PageService } from './../core/services/page.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html',
  styleUrls: ['./leasing.component.scss']
})
export class LeasingComponent implements OnInit {

  banner = '';
  pageTitle = '';
  currentJustify = 'fill';
  leasingForm: FormGroup;
  leasingTypes = ['Store', 'Kiosk', 'Promotional space'];
  submitted = false;
  responseStatus = false;
  responseText = '';


  constructor(
    private pageService: PageService,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {

    this.leasingForm = this.formBuilder.group({
      type: ['', Validators.required],
      brandName: ['', Validators.required],
      franchise: ['', Validators.required],
      country: [''],
      companyName: ['', Validators.required],
      address: [''],
      website: [''],
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      attachedProfile: [null]
  });

    this.pageService.getPageBanner('leasing', localStorage.getItem('lang'))
      .subscribe(response => {
        this.banner = response.data.cover;
        this.pageTitle = response.data.title;
      });
  }

  onFileChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.leasingForm.patchValue({
      attachedProfile: file
    });
    this.leasingForm.get('attachedProfile').updateValueAndValidity();
  }

  onSubmit() {
    this.submitted = true;
    if (this.leasingForm.valid) {
      const formData: any = new FormData();
      formData.append('attachedProfile', this.leasingForm.get('attachedProfile').value);
      formData.append('type', this.leasingForm.get('type').value);
      formData.append('brandName', this.leasingForm.get('brandName').value);
      formData.append('franchise', this.leasingForm.get('franchise').value);
      formData.append('country', this.leasingForm.get('country').value);
      formData.append('companyName', this.leasingForm.get('companyName').value);
      formData.append('address', this.leasingForm.get('address').value);
      formData.append('website', this.leasingForm.get('website').value);
      formData.append('name', this.leasingForm.get('name').value);
      formData.append('mobileNumber', this.leasingForm.get('mobileNumber').value);
      // const formData = this.leasingForm.value;
      this.pageService.postLeasingForm(formData).subscribe(
        response => {
          this.responseStatus = true;
          this.responseText = response.message;
          if (response.status === 200) {
            this.revert();
          }
        }
      );
    } else {
      console.log('Invalid Form');
      return;
    }

  }
  get f() { return this.leasingForm.controls; }

  revert() {

    this.leasingForm.reset();
  }
}

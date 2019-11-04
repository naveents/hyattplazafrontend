import { PageService } from './../core/services/page.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html',
  styleUrls: ['./leasing.component.scss']
})
export class LeasingComponent implements OnInit {

  banner = '';
  pageTitle = '';
  currentJustify = 'fill';
  private leasingForm: any;
  leasingTypes = ['Store', 'Kiosk', 'Promotional space'];


  constructor(
    private pageService: PageService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.leasingForm = new FormGroup({
      leasingType: new FormControl(null, Validators.required),
      brandName: new FormControl(null, Validators.required),
      franchise: new FormControl(null, Validators.required),
      countryOfOrigin: new FormControl(null),
      companyName: new FormControl(null, Validators.required),
      address: new FormControl(null),
      website: new FormControl(null),
      name: new FormControl(null, Validators.required),
      mobileNumber: new FormControl(null, Validators.required),
      attachment: new FormControl(null)
    });

    this.pageService.getPageBanner('leasing', localStorage.getItem('lang'))
      .subscribe(response => {
        console.log(response);
        this.banner = response.data.cover;
        this.pageTitle = response.data.title;
      });
  }

  onFileChange(event) {

    /*
    let reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.leasingForm.patchValue({
          attachment: reader.result
        });
        this.cd.markForCheck();
      };
    }
    */
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.leasingForm.get('attachment').setValue(file);
    }
  }

  onSubmit() {
    if (this.leasingForm.valid) {
      const formData = new FormData();
      formData.append('attachedProfile', this.leasingForm.get('attachment').value);
      formData.append('type', this.leasingForm.get('leasingType').value);
      formData.append('brandName', this.leasingForm.get('brandName'));
      formData.append('franchise', this.leasingForm.get('franchise'));
      formData.append('country', this.leasingForm.get('countryOfOrigin'));
      formData.append('companyName', this.leasingForm.get('companyName'));
      formData.append('address', this.leasingForm.get('address'));
      formData.append('website', this.leasingForm.get('website'));
      formData.append('name', this.leasingForm.get('name'));
      formData.append('mobileNumber', this.leasingForm.get('mobileNumber'));
      this.pageService.postLeasingForm(formData).subscribe(
        response => {
          console.log(response);
        }
      );
    } else {
      console.log('Invalid Form');
    }

  }

  revert() {
    this.leasingForm.reset();
  }

}

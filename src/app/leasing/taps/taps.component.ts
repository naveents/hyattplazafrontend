import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';

declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-taps',
  templateUrl: './taps.component.html',
  styleUrls: ['./taps.component.scss']
})
export class TapsComponent implements OnInit {

  showMainContent: Boolean = true;

  respose: any;

  dropDown() {
    $(document).ready(function () {
      $('#ddlViewBy').change(function () {
        if ($('#ddlViewBy').val() === '1') {
          $('#cont-us').show();
          $('#anj').hide();
          $('#precious').hide();
        }
        if ($('#ddlViewBy').val() === '2') {
          $('#cont-us').hide();
          $('#anj').show();
          $('#precious').hide();


        }
        if ($('#ddlViewBy').val() === '3') {
          $('#precious').show();
          $('#cont-us').hide();
          $('#anj').hide();
        }
      });

    });

  }

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
  }

  constructor( private http: HttpClient) { }

  ngOnInit() {


     
   

    this.dropDown();

    //  NewDROPDown

    
    // ENdDropDown






    $(document).ready(function () {

      // Variables
      let clickedTab = $('.tabs > .active');
      const tabWrapper = $('.tab__content');
      let activeTab = tabWrapper.find('.active');
      let activeTabHeight = activeTab.outerHeight();

      // Show tab on page load
      activeTab.hide();

      // Set height of wrapper on page load
      // tabWrapper.height(activeTabHeight);

      $('.tabs > li').on('click', function () {

        // Remove class from active tab
        $('.tabs > li').removeClass('active');

        // Add class active to clicked tab
        $(this).addClass('active');

        // Update clickedTab variable
        clickedTab = $('.tabs .active');

        // fade out active tab
        activeTab.fadeOut(250, function () {

          // Remove active class all tabs
          $('.tab__content > li').removeClass('active');

          // Get index of clicked tab
          const clickedTabIndex = clickedTab.index();

          // Add class active to corresponding tab
          $('.tab__content > li').eq(clickedTabIndex).addClass('active');

          // update new active tab
          activeTab = $('.tab__content > .active');

          // Update variable
          activeTabHeight = activeTab.outerHeight();

          // Animate height of wrapper to new tab height
          tabWrapper.stop().delay(50).animate({
            height: activeTabHeight
          }, 500, function () {

            // Fade in active tab
            activeTab.delay(50).fadeIn(250);

          });
        });
      });
    });




  }

  onClickSubmit(data) {

    console.log(JSON.stringify(data));
    this.http.post('http://socialynerds.com/api/store/index.php', JSON.stringify(data)).subscribe(response => this.respose = response);

  }
  submitAd(data) {
    console.log(JSON.stringify(data));
    this.http.post('http://socialynerds.com/api/advertisement/index.php', JSON.stringify(data)).subscribe(response => this.respose = response);
  }
  submitKisosk(data) {
    console.log(JSON.stringify(data));
    this.http.post('http://socialynerds.com/api/kisosk/index.php', JSON.stringify(data)).subscribe(response => this.respose = response);
  }
  submitPromo(data) {
    console.log(JSON.stringify(data));
    this.http.post('http://socialynerds.com/api/promotion/index.php', JSON.stringify(data)).subscribe(response => this.respose = response);
  }
  updateFileName(event){
    console.log(event.target.files[0].name);
    $('.file-custom').innerHTML = event.target.files[0].name;
  }

}

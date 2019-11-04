import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  hyattCareer = [
    {
    id: 1,
    title: 'Assistant Manager',
    shortdes: '9834 Manager Post Vacancy jobs available on Indeed.co.in. Center Manager, Assistant Manager, Marketing Manager and more!',
    detaildes: 'We are looking for a responsible Assistant Manager to help organize and run our retail stores and fill in for the Store Manager when needed. Your job will be highly important in ensuring the sales team meets its goals of efficiency and customer satisfaction. Assistant Manager responsibilities include hiring and training sales associates, monitoring inventory and ordering merchandise based on demand. You will also research competitive products and analyze consumer behavior to ensure our store meets and exceeds client expectations.',
    skills: 'Leadership Skills <br> Ability to Follow Directions <br> Responsibility Likability <br> Decision-Making Capability.',
    responsible: 'Track the progress of weekly, monthly, quarterly and annual objectives <br> Monitor and maintain store inventory <br> Evaluate employee performance and identify hiring and training needs',

  },
  {
    id: 2,
    title: 'Server Admin',
    shortdes: 'Server administrators install, configure, and maintain various types of hardware and software,',
    detaildes: 'We are looking for a responsible Assistant Manager to help organize and run our retail stores and fill in for the Store Manager when needed. Your job will be highly important in ensuring the sales team meets its goals of efficiency and customer satisfaction. Assistant Manager responsibilities include hiring and training sales associates, monitoring inventory and ordering merchandise based on demand. You will also research competitive products and analyze consumer behavior to ensure our store meets and exceeds client expectations.',
    skills: 'Leadership Skills <br> Ability to Follow Directions <br> Responsibility Likability <br> Decision-Making Capability.',
    responsible: 'Track the progress of weekly, monthly, quarterly and annual objectives <br> Monitor and maintain store inventory <br> Evaluate employee performance and identify hiring and training needs',
     
  },
  {
    id: 3,
    title: 'Job 3',
    shortdes: ' Consetetur amet eirmod dolor rebum aliquyam. Dolore clita ipsum sanctus no labore invidunt, magna dolor est lorem ea. Justo sed. Server administrators install, configure, and maintain various types of hardware and software,',
    detaildes: 'We are looking for a responsible Assistant Manager to help organize and run our retail stores and fill in for the Store Manager when needed. Your job will be highly important in ensuring the sales team meets its goals of efficiency and customer satisfaction. Assistant Manager responsibilities include hiring and training sales associates, monitoring inventory and ordering merchandise based on demand. You will also research competitive products and analyze consumer behavior to ensure our store meets and exceeds client expectations.',
    skills: 'Leadership Skills <br> Ability to Follow Directions <br> Responsibility Likability <br> Decision-Making Capability.',
    responsible: 'Track the progress of weekly, monthly, quarterly and annual objectives <br> Monitor and maintain store inventory <br> Evaluate employee performance and identify hiring and training needs',
  
  },
  {
    id: 4,
    title: 'Job 4',
    shortdes: 'Consetetur amet eirmod dolor rebum aliquyam. Dolore clita ipsum sanctus no labore invidunt, magna d Server administrators install, configure, and maintain various types of hardware and software,',
    detaildes: 'Consetetur amet eirmod dolor rebum aliquyam. Dolore clita ipsum sanctus no labore invidunt, magna d We are looking for a responsible Assistant Manager to help organize and run our retail stores and fill in for the Store Manager when needed. Your job will be highly important in ensuring the sales team meets its goals of efficiency and customer satisfaction. Assistant Manager responsibilities include hiring and training sales associates, monitoring inventory and ordering merchandise based on demand. You will also research competitive products and analyze consumer behavior to ensure our store meets and exceeds client expectations.',
    skills: 'Leadership Skills <br> Ability to Follow Directions <br> Responsibility Likability <br> Decision-Making Capability.',
    responsible: 'Track the progress of weekly, monthly, quarterly and annual objectives <br> Monitor and maintain store inventory <br> Evaluate employee performance and identify hiring and training needs',

  },
  {
    id: 5,
    title: 'Job 5',
    shortdes: ' Consetetur amet eirmod dolor rebum aliquyam. Dolore clita ipsum sanctus no labore invidunt, magna d Server administrators install, configure, and maintain various types of hardware and software,',
    detaildes: 'Consetetur amet eirmod dolor rebum aliquyam. Dolore clita ipsum sanctus no labore invidunt, magna d We are looking for a responsible Assistant Manager to help organize and run our retail stores and fill in for the Store Manager when needed. Your job will be highly important in ensuring the sales team meets its goals of efficiency and customer satisfaction. Assistant Manager responsibilities include hiring and training sales associates, monitoring inventory and ordering merchandise based on demand. You will also research competitive products and analyze consumer behavior to ensure our store meets and exceeds client expectations.',
    skills: 'Leadership Skills <br> Ability to Follow Directions <br> Responsibility Likability <br> Decision-Making Capability.',
    responsible: 'Track the progress of weekly, monthly, quarterly and annual objectives <br> Monitor and maintain store inventory <br> Evaluate employee performance and identify hiring and training needs',
 
  },

];


 
  showTab = 1;
  tabToggle(index) {
    this.showTab = index;
  }


 
  constructor() { }

  ngOnInit() {
   
  }

}

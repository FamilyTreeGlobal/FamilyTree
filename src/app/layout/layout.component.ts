import { Component, OnInit ,OnDestroy,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['../../assets/css/layout.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("body-background-img");
        body.classList.add("body-background-color");
        
    }
    //Remove the class from body tag when the View is destroyed
    // ngOnDestroy() {
    //     let body = document.getElementsByTagName('body')[0];
    //     body.classList.remove("landing-page");
    // }

}

import { Component, OnInit ,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("body-background-img");
        body.classList.add("body-background-color");
  }

}

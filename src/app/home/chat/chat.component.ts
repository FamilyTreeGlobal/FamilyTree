import { Component, OnInit,EventEmitter,OnDestroy,ViewEncapsulation,ElementRef, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
private countryName: string;
    private tab1: boolean = false;    
    private imgsource_profile="../assets/images/profile.png";
  constructor(el: ElementRef,  private router: Router) { }

  ngOnInit() {
  }
  

}

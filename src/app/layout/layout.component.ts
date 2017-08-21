import { Component, OnInit ,EventEmitter,OnDestroy,ViewEncapsulation,ElementRef, Output} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  private countryName: string;
    private name: string = "William J";
    private role: string;
    private tab1: boolean = false;    
    private tab2: boolean = true;
    private tab3: boolean = false;
    private tab4: boolean = false;
    private tab5: boolean = false;
    private tab6: boolean = false;
    private imgsource_family="../assets/images/User.png";
    private imgsource_profile="../assets/images/familymem.png";
    private imgsource_chat="../assets/images/chat.png";
    private imgsource_invitations="../assets/images/Invitation.png";
    private imgsource_requests="../assets/images/request.png";
    private imgsource_familynews="../assets/images/News.png";
    private tabAccess1: boolean = true;
    private tabAccess2: boolean = true;
    private tabAccess3: boolean = true;
    private tabAccess4: boolean = true;
    private tabAccess5: boolean = true;
    private currentTab: string;
    
    constructor(el: ElementRef,  private router: Router) {    
   }

  
 public onTabClicks(index: number) {
        let vm = this;
        vm.tab1 = false;        
        vm.tab2 = false;
        vm.tab3 = false;
        vm.tab4 = false;
        vm.tab5 = false;
        vm.tab6 = false;
        this.imgsource_family="../assets/images/familymem.png";
        this.imgsource_profile="../assets/images/User.png";
        this.imgsource_chat="../assets/images/chat.png";
        this.imgsource_requests="../assets/images/request.png";
        this.imgsource_familynews="../assets/images/News.png";
        this.imgsource_invitations="../assets/images/Invitation.png";
        
        if (index == 1) {
            vm.tab1 = true;  
            this.imgsource_profile="../assets/images/userwhite.png";
            vm.router.navigate(['/app/profile']);           
        } else if (index == 2) {
            this.imgsource_family="../assets/images/familymemwhite.png";
            vm.tab2 = true;            
            vm.router.navigate(['/app/home']);
        } else if (index == 3) {
            this.imgsource_chat="../assets/images/Chatwhite.png";
            vm.tab3 = true;            
            vm.router.navigate(['/app/chat']);
        } else if (index == 4) {
            this.imgsource_invitations="../assets/images/Invitationwhite.png";
            vm.tab4 = true;
            vm.router.navigate(['/app/invitations']);            
        } else if (index == 5) {
            this.imgsource_requests="../assets/images/requestwhite.png";
            vm.tab5 = true;
            vm.router.navigate(['/app/requests']);            
        } else if (index == 6) {
            this.imgsource_familynews="../assets/images/newswhite.png"; 
            vm.tab6 = true;            
            vm.router.navigate(['/app/familynews']);
        }
    }
  
  logout(): any {
    //this.router.navigate(['/login']);
  }
  ngOnInit() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("body-background-img");
        body.classList.add("body-background-color");
        this.imgsource_family="../assets/images/familymemwhite.png";
    }
    //Remove the class from body tag when the View is destroyed
    // ngOnDestroy() {
    //     let body = document.getElementsByTagName('body')[0];
    //     body.classList.remove("landing-page");
    // }

}

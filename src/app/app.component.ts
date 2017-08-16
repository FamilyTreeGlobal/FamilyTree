import { Component,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
   templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
}


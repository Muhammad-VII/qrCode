import { GetVcardInfoService } from './get-vcard-info.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrcode';
  show404:boolean = false
  constructor(public _Router: Router, private _GetVcardInfoService:GetVcardInfoService) {
  }
  
}

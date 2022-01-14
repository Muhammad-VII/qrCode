import { GetVcardInfoService } from './../../get-vcard-info.service';
import { Component, OnInit } from '@angular/core';
import { VCard } from "ngx-vcard";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mi',
  templateUrl: './mi.component.html',
  styleUrls: ['./mi.component.scss']
})
export class MiComponent implements OnInit {
  cardInfo: any;
  id!:string;
  public vCard!:VCard;
  constructor(private _VcardService:GetVcardInfoService, private _ActivatedRoute: ActivatedRoute) {
    this._ActivatedRoute.params.subscribe((params:any) => {
      this.id = params['id']
      this._VcardService.getVcardInfo(this.id).subscribe((res) => {
        this.cardInfo = res[0]
         this.vCard = {
          name: {
            firstNames: this.cardInfo.Fname,
            lastNames: this.cardInfo.Lname,
          },
          telephone: [
            this.cardInfo.Phone1
          ]
        };
      })
    })
    
  }

  addToContact() {
    this._VcardService.addToContact(this.cardInfo.VCartLogId)
  }
  
  ngOnInit(): void { }
}

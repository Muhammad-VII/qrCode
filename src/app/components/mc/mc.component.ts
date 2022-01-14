import { ActivatedRoute, Router } from '@angular/router';
import { GetVcardInfoService } from './../../get-vcard-info.service';
import { VCard } from 'ngx-vcard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mc',
  templateUrl: './mc.component.html',
  styleUrls: ['./mc.component.scss']
})
export class McComponent implements OnInit {

  cardInfo: any;
  id!:string;
  public vCard!:VCard;
  constructor(private _VcardService:GetVcardInfoService, private _ActivatedRoute: ActivatedRoute, private _Router: Router) {
    this._ActivatedRoute.params.subscribe((params:any) => {
      this.id = params['id']
      this._VcardService.getVcardInfo(this.id).subscribe((res) => {
        if(res.length <= 0)
        {
          this._Router.navigate(['idRequired'])
        } else {
          this.cardInfo = res[0]
          this.vCard = {
          name: {
            firstNames: this.cardInfo.Fname,
            lastNames: this.cardInfo.Lname,
          },
          telephone: [
            this.cardInfo.Phone1,
            this.cardInfo.Phone2,
          ]
        };
        }
        
      })
    })
    
  }

  addToContact() {
    this._VcardService.addToContact(this.cardInfo.VCartLogId)
  }

  ngOnInit(): void { }
  
}

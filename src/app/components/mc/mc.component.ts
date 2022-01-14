import { VCard } from 'ngx-vcard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mc',
  templateUrl: './mc.component.html',
  styleUrls: ['./mc.component.scss']
})
export class McComponent implements OnInit {

  constructor() { }

  public vCard: VCard = {
    name: {
      firstNames: "Ahmed",
      lastNames: "Magdy",
    },
    telephone: [
      "01100001111"
    ]
  };

  ngOnInit(): void {
  }
  
}

import { Component, OnInit } from '@angular/core';
import { VCard } from "ngx-vcard";

@Component({
  selector: 'app-mi',
  templateUrl: './mi.component.html',
  styleUrls: ['./mi.component.scss']
})
export class MiComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  public vCard: VCard = {
    name: {
      firstNames: "Ahmed",
      lastNames: "Magdy",
    },
    telephone: [
      "01100001111"
    ]
  };
}

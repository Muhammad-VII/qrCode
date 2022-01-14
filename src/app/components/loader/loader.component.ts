import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $:any
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public _Router:Router) {
    let fade = function() {
      $('main').fadeOut(2000, () => {
        $("body").css("overflow", "auto");
      });
    } 
    $(document).ready(function () {
      setTimeout(fade,1500)
    });
  }

  ngOnInit(): void {
  }

}

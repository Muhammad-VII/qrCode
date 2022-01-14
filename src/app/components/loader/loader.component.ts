import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(public _Router: Router) {}
  ngOnInit(): void {
    const loaderDiv = document.querySelector('main')! as HTMLDivElement;
    const body = document.querySelector('body')! as HTMLBodyElement;
    window.onload = () => {
      setTimeout(() => {
        loaderDiv.style.opacity = '0';
      },1500);
      setTimeout(() => {
        body.style.overflow = 'auto';
        loaderDiv.style.display = 'none';
      },3300);
    };
  }
}

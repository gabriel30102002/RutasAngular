// src/app/external-redirect/external-redirect.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-redirect',
  template: '',
})
export class ExternalRedirectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://getbootstrap.com/docs/5.3/examples/sign-in/';
  }

}

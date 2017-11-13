import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../material.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  constructor() {}
  ngOnInit() { }
  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }
}

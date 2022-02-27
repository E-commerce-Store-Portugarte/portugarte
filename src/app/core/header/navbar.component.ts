import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    }
  }
}

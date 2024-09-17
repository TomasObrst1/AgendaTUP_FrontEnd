import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleRight, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  
  iconoBuscador = faMagnifyingGlass

  iconoUser = faUser
  iconoMoon = faMoon;
  iconoExit = faArrowAltCircleRight

  constructor() {}

  ngOnInit(): void {}
}

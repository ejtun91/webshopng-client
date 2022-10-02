import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngecomm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent implements OnInit {
  open = false;
  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.open = !this.open;
  }
}

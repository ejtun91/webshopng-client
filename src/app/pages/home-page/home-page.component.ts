import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngecomm-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  items = [
    {
      text1: 'Cutting Edge',
      text2: 'Technology Store',
      img: '/docs/assets/img/h1-slide-1-img-1.png',
    },
    {
      text1: 'Modern and',
      text2: 'Just Captivating',
      img: '/docs/assets/img/h1-slide-2-img-1.png',
    },
    {
      text1: 'It`s Powerful',
      text2: 'It`s Cyberstore',
      img: '/docs/assets/img/h1-slide-3-img-1.png',
    },
  ];
  ngOnInit(): void {}
}

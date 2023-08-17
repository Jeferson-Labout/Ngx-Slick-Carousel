import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {


  slides = [
    { img: 'assets/img1.png' },
    { img: 'assets/img2.png' },
    { img: 'assets/img3.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },
    { img: 'assets/img4.png' },

  ];

  slideConfig = {
    'slidesToShow': 4,
    'slidesToScroll': 4,
    'autoplay': true,
    'autoplaySpeed': 5000,
    'pauseOnHover': true,
    "dots": true,
    'infinite': true,
    'responsive': [
      {
        'breakpoint': 992,
        'settings': {
          'arrows': true,
          'infinite': true,
          'slidesToShow': 3,
          'slidesToScroll': 3
        }

      },
      {
        'breakpoint': 768,
        'settings': {
          'arrows': true,
          'infinite': true,
          'slidesToShow': 1,
          'slidesToScroll': 1
        }

      },

    ]
  }
}

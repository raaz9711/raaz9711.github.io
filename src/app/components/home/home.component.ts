import { NgIf } from '@angular/common';
import { Component,AfterViewInit, inject } from '@angular/core';
import Typed from 'typed.js';
import gsap from 'gsap';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

headerService = inject(HeaderService);

isDarkMode = false;

// Subscribe to dark mode changes inside ngAfterViewInit
ngAfterViewInit() {
  this.headerService.isDarkMode$.subscribe((darkMode: boolean) => {
    this.isDarkMode = darkMode;
  });

  // GSAP Animations
  gsap.from('.hero-title', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
  gsap.from('.hero-tagline', { opacity: 0, y: 20, duration: 1, delay: 0.5 });
  gsap.from('.btn', { opacity: 0, y: 20, delay: 1, stagger: 0.2 });

  // Typed.js Text Animation
  const options = {
    strings: [
      "A Full-Stack Developer.",
      "Building Angular & .NET Applications.",
      "Cloud Solutions Enthusiast."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  };
  setTimeout(() => {
    new Typed('#typed-text', options);
  }, 1000);
}

  // ngAfterViewInit() {
  //   // GSAP Animations
  //   gsap.from('.hero-title', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
  //   gsap.from('.hero-tagline', { opacity: 0, y: 20, duration: 1, delay: 0.5 });
  //   gsap.from('.btn', { opacity: 0, y: 20, delay: 1, stagger: 0.2 });

  //   // Typed.js Text Animation
  //   const options = {
  //     strings: [
  //       "A Full-Stack Developer.",
  //       "Building Angular & .NET Applications.",
  //       "Cloud Solutions Enthusiast."
  //     ],
  //     typeSpeed: 50,
  //     backSpeed: 30,
  //     loop: true,
  //   };
  //   setTimeout(() => {
  //   new Typed('#typed-text', options);
  //   }, 1000);
  // }

}

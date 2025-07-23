import { NgIf } from '@angular/common';
import { Component, inject, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isDarkMode = false;
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.headerService.toggleDarkMode();
  }
headerService = inject(HeaderService);



}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-layout',
  standalone: true,  // <- must be standalone
  imports: [
    CommonModule,       // <- for *ngFor / *ngIf
    RouterModule,       // <- for router-outlet & navigation
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']  // <- plural
})
export class Layout {
  selectedInstitution: number | null = null;

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  selectInstitution(inst: number) {
    console.log('Selected institution:', inst);
    this.selectedInstitution = inst;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}

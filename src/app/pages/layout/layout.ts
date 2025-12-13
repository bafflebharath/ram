import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InstitutionService } from '../../services/institutionService/institution-service';

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

  constructor(private router: Router, private instService: InstitutionService) {
    this.selectedInstitution = this.instService.getSelectedInstitution();
    this.instService.selectedInstitution$.subscribe(inst => {
      this.selectedInstitution = inst;
      // keep query param updated so child pages can pick it up
      this.router.navigate([], { queryParams: { inst }, queryParamsHandling: 'merge' });
    });
  }

  navigate(path: string) {
    // append selected institution as query param
    const inst = this.selectedInstitution ?? this.instService.getSelectedInstitution();
    this.router.navigate([path], { queryParams: { inst } });
  }

  selectInstitution(inst: number) {
    console.log('Selected institution:', inst);
    this.instService.setSelectedInstitution(inst);
    this.router.navigate([], { queryParams: { inst }, queryParamsHandling: 'merge' });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}

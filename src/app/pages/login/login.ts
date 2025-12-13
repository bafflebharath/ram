import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InstitutionService } from '../../services/institutionService/institution-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  EmailId = '';
  Password = '';

  // constructor(private http: HttpClient, private router: Router) {}

  // onSubmit() {
  //   const payload = {
  //     Password: this.Password,
  //     ContactNo: this.EmailId
  //   };
  //   this.http.post('/api/EventBooking/Login', payload)
  //     .subscribe({
  //       next: () => this.router.navigate(['/layout/dashboard']),
  //       error: () => alert('Login failed')
  //     });
  // }

  constructor(private router: Router, private instService: InstitutionService) {}

  onSubmit() {
    if (this.EmailId === 'admin' && this.Password === 'admin') {
      // store a flag (optional)
      localStorage.setItem('isLoggedIn', 'true');
      // default to institution 1
      this.instService.setSelectedInstitution(1);
      // redirect to layout/dashboard
      this.router.navigate(['/layout/dashboard'], { queryParams: { inst: 1 }});
      return;
    }
    alert('Invalid username or password');
  }
  
}
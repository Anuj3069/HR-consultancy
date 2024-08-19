import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
@Component({
  selector: 'app-companycontact',
  standalone: true,
  imports: [],
  templateUrl: './companycontact.component.html',
  styleUrl: './companycontact.component.css'
})
export class CompanycontactComponent {
  constructor(private userService: UserServiceService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      firstname: formData.get('firstname') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      contactNumber: formData.get('contactNumber') as string,
      remarks: formData.get('remarks') as string
    };

    if (this.isFormValid(data)) {
      this.userService.companyUser( data).subscribe(
        response => {
          console.log('Form submitted successfully', response);
          alert('Form submitted successfully!');
          form.reset();
        },
        error => {
          console.error('Error submitting form', error);
          alert('Error submitting form. Please try again.');
        }
      );
    } else {
      alert('Please fill all fields correctly.');
    }
  }

  isFormValid(data: any): boolean {
    return Object.values(data).every(value => (value as string).trim() !== '') &&
           this.isValidEmail(data.email) &&
           this.isValidContactNo(data.contactNumber);
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  isValidContactNo(contactNumber: string): boolean {
    const contactNumberRegex = /^\d{10}$/;
    return contactNumberRegex.test(contactNumber);
  }
}

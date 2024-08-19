import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  file: File | null = null;
  isLoading: boolean = false;  // Add this line
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.file = input.files[0];
    }
  }

  handleSubmit(): void {
    this.isLoading = true;
    const name = (document.getElementById('name') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const lastName = (document.getElementById('lastname') as HTMLInputElement)?.value;
    const contactNumber = (document.getElementById('contactnumber') as HTMLInputElement)?.value;
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Contact number validation regex (10 digits)
    const contactNumberRegex = /^\d{10}$/;

    if (!name || !email || !lastName || !contactNumber || !this.file) {
      alert('All fields are mandatory!');
      this.isLoading = false;
      return;

    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      this.isLoading = false;
      return;
    }

    if (!contactNumberRegex.test(contactNumber)) {
      alert('Contact number must be 10 digits.');
      this.isLoading = false;
      return;
    }
 const formData = new FormData();
  formData.append('username', name);
  formData.append('email', email);
  formData.append('lastName', lastName);
  formData.append('contactNumber', contactNumber);
  // formData.append('message', message);
  formData.append('resume', this.file, this.file.name);

  this.userService.postUser(formData).subscribe({
    next: (response) => {
      console.log(response);
      alert('Form submitted successfully!');
      this.clearForm();
      this.isLoading = false;
    },
    error: (error) => {
      console.error('Error:', error);
      let errorMessage = 'An error occurred while submitting the form.';

      // Check if the error response has a message
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      alert(errorMessage);
      this.isLoading = false;
    }
  });
  }

  clearForm(): void {
    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('lastname') as HTMLInputElement).value = '';
    (document.getElementById('contactnumber') as HTMLInputElement).value = '';
    (document.getElementById('message') as HTMLTextAreaElement).value = '';
    // this.file = null;

    // Clear the file input
    const fileInput = document.getElementById('uploadFile') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
     // Reset the file property
  this.file = null;

  // Reset the displayed file name (if you're showing it)
  const fileNameElement = document.querySelector('[data-file-name]');
  if (fileNameElement) {
    fileNameElement.textContent = '';
  }
  }
}

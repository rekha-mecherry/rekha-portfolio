import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactInfo = {
    linkedin: 'https://www.linkedin.com/in/rekha-mecherry',
    website: 'https://rekha-mecherry-bveeebb0fnegaegn.centralindia-01.azurewebsites.net/',
    location: 'Bangalore, India',
    status: 'Open to Enterprise Cloud & Architecture Consultations ,Remote Jobs [Architeture and Development'
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  isSending = false;
  errorMessage = '';

  sendMessage() {
    this.errorMessage = '';

    if (!this.formData.name.trim() || !this.formData.email.trim() || !this.formData.message.trim()) {
      this.errorMessage = 'Please complete all required fields (Name, Email, and Message).';
      return;
    }

    this.isSending = true;

    // Construct mailto link
    const subject = encodeURIComponent(
      this.formData.subject.trim()
        ? `[Portfolio Contact] ${this.formData.subject}`
        : `[Portfolio Contact] Message from ${this.formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    );
    const mailtoUrl = `mailto:${this.contactInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      this.isSending = false;
      this.submitted = true;
      // Open the user's default email client
      if (typeof window !== 'undefined') {
        window.location.href = mailtoUrl;
      }
    }, 600);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.submitted = false;
    this.errorMessage = '';
  }
}

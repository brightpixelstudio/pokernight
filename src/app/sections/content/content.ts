import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'content',
  imports: [FormsModule],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  recipientEmail = 'brightpixelstudios@gmail.com';
  userForm = { username: '', email: '', phone: '', day: '', time: '', comments: '' };

  onSubmit(form: NgForm) {
    if (form.valid) {
      //console.log('Form Data:', form.value);

      const subject = encodeURIComponent('Sign-up For Poker Night');
      const body = encodeURIComponent(
        `Name: ${form.value.username}\nPhone: ${form.value.phone}\nWeek: ${form.value.week}\nDay: ${form.value.day}\nTime: ${form.value.time}\nComments: ${form.value.comments}`,
      );

      // Build the finalized mailto string
      const mailtoUrl = `mailto:${this.recipientEmail}?subject=${subject}&body=${body}`;

      // Trigger the operating system's default email client
      window.open(mailtoUrl, '_blank');
    }
  }
}

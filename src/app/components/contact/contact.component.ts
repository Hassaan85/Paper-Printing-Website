import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  isLoading: boolean = false;

  constructor(
    private emailService: EmailService,
    private toastService: ToastService
  ) { }

  async onSubmit(event: Event) {
    event.preventDefault();

    if (this.isLoading) return;

    this.isLoading = true;

    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      phone: this.phone,
      message: this.message,
      to_email: 'info@farsiyapaperpasting.ae'
    };

    try {
      await this.emailService.sendEmail(templateParams);
      this.toastService.show('Message sent successfully!', 'success');
      this.resetForm();
    } catch (error) {
      this.toastService.show('Failed to send message. Please try again later.', 'error');
    } finally {
      this.isLoading = false;
    }
  }

  private resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }
}

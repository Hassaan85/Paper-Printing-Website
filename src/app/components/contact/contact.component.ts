import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    // Handle form submission logic here
    alert('Message sent successfully! (Demo)');
  }
}

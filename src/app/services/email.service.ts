import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor() {
        emailjs.init(environment.emailjs.publicKey);
    }

    async sendEmail(templateParams: any): Promise<void> {
        try {
            await emailjs.send(
                environment.emailjs.serviceId,
                environment.emailjs.templateId,
                templateParams
            );
        } catch (error) {
            console.error('EmailJS Error:', error);
            throw error;
        }
    }
}

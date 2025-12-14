import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
    message: string;
    type: 'success' | 'error' | 'info';
    duration?: number;
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private toastSubject = new BehaviorSubject<ToastMessage | null>(null);
    toast$ = this.toastSubject.asObservable();

    constructor() { }

    show(message: string, type: 'success' | 'error' | 'info' = 'info', duration: number = 3000) {
        this.toastSubject.next({ message, type, duration });
    }

    hide() {
        this.toastSubject.next(null);
    }
}

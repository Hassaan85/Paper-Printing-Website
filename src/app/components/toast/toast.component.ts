import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService, ToastMessage } from '../../services/toast.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    animations: [
        trigger('toastAnimation', [
            state('void', style({
                transform: 'translateX(100%)',
                opacity: 0
            })),
            state('*', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('void => *', [
                animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
            ]),
            transition('* => void', [
                animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
                    transform: 'translateX(100%)',
                    opacity: 0
                }))
            ])
        ])
    ]
})
export class ToastComponent implements OnInit, OnDestroy {
    message: ToastMessage | null = null;
    private subscription: Subscription | null = null;
    private timeoutId: any;

    constructor(private toastService: ToastService) { }

    ngOnInit(): void {
        this.subscription = this.toastService.toast$.subscribe(msg => {
            this.message = msg;

            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }

            if (msg) {
                this.timeoutId = setTimeout(() => {
                    this.closeToast();
                }, msg.duration || 3000);
            }
        });
    }

    closeToast() {
        this.toastService.hide();
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

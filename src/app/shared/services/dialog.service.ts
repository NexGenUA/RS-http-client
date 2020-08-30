import { TitleCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(
        private snackBar: MatSnackBar,
        private titleCase: TitleCasePipe,
    ) {}

    show({
        message,
        action,
        duration,
    }: {
        message: string;
        action?: string;
        duration?: number;
    }) {
        this.snackBar.open(this.titleCase.transform(message), action, {
            duration: duration || 10000,
        });
    }

    hide() {
        this.snackBar.dismiss();
    }
}

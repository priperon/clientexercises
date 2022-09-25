import { AbstractControl } from '@angular/forms';
export function ValidateEmail(control: AbstractControl): { invalidEmail: boolean } | null {
    const EMAIL_REGEXP = /^[A-Za-z][A-Za-z][ @]?[A-Za-z][A-Za-z][.][A-Za-z][A-Za-z]$/;
    return !EMAIL_REGEXP.test(control.value) ? { invalidEmail: true } : null;
} // ValidateEmail
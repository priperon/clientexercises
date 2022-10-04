import { AbstractControl } from '@angular/forms';
export function ValidateDecimalValue(control: AbstractControl): { invalidDecimalValue: boolean } | null {
    const VALUE_REGEXP = /^\d+(\.\d{1,2})?$/i;
    return !VALUE_REGEXP.test(control.value) ? { invalidDecimalValue: true } : null;
} // ValidateDecimalValue
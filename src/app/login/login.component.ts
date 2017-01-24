import { FormArray } from '@angular/forms/src/model';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

 function ratingRange(min: number, max: number): ValidatorFn {
    return  (c: AbstractControl): {[key: string]: boolean} | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        };
        return null;
    };
}
function emailMatcher(c: AbstractControl): {[key: string]: boolean} | null {

    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
 }


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
    emailMessage: string;

    get addresses(): FormArray{
        return <FormArray>this.form.get('addresses');
    }

    private validationMessages = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
                confirmEmail: ['', Validators.required],
            }, {validator: emailMatcher}),
            phone: '',
            notification: 'email',
            rating: ['', ratingRange(1, 5)],
            sendCatalog: true,
            addresses: this.fb.array([this.buildAddress()])
        });

        this.form.get('notification').valueChanges
                         .subscribe(value => this.setNotification(value));

        const emailControl = this.form.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value =>
            this.setMessage(emailControl));
    }

    addAddress(): void {
        this.addresses.push(this.buildAddress());
    }

    buildAddress(): FormGroup {
        return this.fb.group({
                addressType: 'home',
                street1: '',
                street2: '',
                city: '',
                state: '',
                zip: ''
        });
    }

    populateTestData(): void {
        this.form.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            emailGroup: {email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com'}
        });
    }

    save(): void {
        console.log('Saved: ' + JSON.stringify(this.form.value));
    }

    setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessages[key]).join(' ');
        }
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.form.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
}

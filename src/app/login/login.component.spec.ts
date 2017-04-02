
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, } from '@angular/http';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('should create RecepientComponent', () => {

    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let firstName: HTMLInputElement;
    let lastName: HTMLInputElement;
    let email: HTMLInputElement;
    let confirmEmail: HTMLInputElement;
    let loginBtn: HTMLButtonElement;
    let phone: HTMLInputElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
            providers: [{ provide: Router }]
        });
        fixture = TestBed.createComponent(LoginComponent);
        comp = fixture.componentInstance;
        firstName = fixture.debugElement.query(By.css('#firstNameId')).nativeElement;
        lastName = fixture.debugElement.query(By.css('#lastNameId')).nativeElement;
        email = fixture.debugElement.query(By.css('#emailId')).nativeElement;
        confirmEmail = fixture.debugElement.query(By.css('#confirmEmailId')).nativeElement;
        loginBtn = fixture.debugElement.query(By.css('#login')).nativeElement;
        comp.ngOnInit();
    });

    it('should creat LoginComponent', async(
        () => {
            expect(comp).toBeTruthy();
        }
    ));

    it('should have a button with initial disabled state', async(() => {

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            console.log('loging button on load :' + loginBtn.disabled);
            expect(loginBtn.disabled).toBe(true);
        })
    }));
    it('should create a `FormGroup` comprised of `FormControl`s', () => {
        comp.ngOnInit();
        expect(comp.form instanceof FormGroup).toBe(true);
    });

    it('firstname should be of atleast three character', async(() => {
        fixture.whenStable().then(
            () => {
                let errors = {};
                fixture.detectChanges();
                firstName.value = 'ya';
                firstName.dispatchEvent(new Event('input'));
                fixture.detectChanges();
                 errors = comp.form.controls.firstName.errors || {};
                console.log('firstname :' + errors['minlength'].actualLength + errors['minlength'].requiredLength   );
                expect(errors['minlength'].actualLength < errors['minlength'].requiredLength );

                 fixture.detectChanges();
                firstName.value = 'yash';
                firstName.dispatchEvent(new Event('input'));
                fixture.detectChanges();
                errors = comp.form.controls.firstName.errors || {};
               //expect(errors['minlength'].actualLength < errors['minlength'].requiredLength).toBeFalsy();

            }
        );
    }));

it('email field validity', () => {
    let errors = {};
    let email = comp.form.controls.email;
    // expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); 

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });


});
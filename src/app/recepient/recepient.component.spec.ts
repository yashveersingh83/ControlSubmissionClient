import { TestBed,async} from '@angular/core/testing';
import { RecepientComponent } from './recepient.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { RecepientService} from './recepient.service';
import { StaticRecepientService } from './static.recepient.service';
import 'rxjs/Rx';

describe('should create RecepientComponent', () => {
  
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RecepientComponent],
            imports: [HttpModule,RouterTestingModule],
            providers: [ {provide: RecepientService , useClass : StaticRecepientService} , { provide: Router}]
        });
    });

it('should have h3 with Recepients', async( () => {
let  fixture = TestBed.createComponent(RecepientComponent);
  let  de = fixture.debugElement;
  let el = de.nativeElement;
  expect (el.querySelector('h3').textContent).toContain('Recepients');

}) );

it('should have Add Recepient  button ' , async (() => {
    let  fixture = TestBed.createComponent(RecepientComponent);
  let  de = fixture.debugElement;
   let el = de.nativeElement;
    expect(el.querySelector('.btn').textContent ).toContain('Add Recepient');
}));

it('should show no records in the table if totalItem =0 ', async (()=>{
let fixture = TestBed.createComponent(RecepientComponent);
    let app = fixture.debugElement.componentInstance;
    let  de = fixture.debugElement;
   let el = de.nativeElement;
    
    let service = fixture.debugElement.injector.get(RecepientService);
    service.getRecepients().subscribe(  r => { app.recepients = r; 
        expect(app.recepients .length).toBe(4); },
                    error => this.errorMessage = <any>error,
                    () => {console.log('done'); fixture.detectChanges();
        expect (el.querySelectorAll('table tbody tr').length).toBe(4);

        }
                 })
});

});
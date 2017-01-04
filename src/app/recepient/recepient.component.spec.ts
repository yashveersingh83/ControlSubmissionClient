import { ComponentFixture, TestBed,async,inject} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RecepientComponent } from './recepient.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { RecepientService} from './recepient.service';

describe('should create RecepientComponent', () => {
  
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RecepientComponent],
            imports: [HttpModule,RouterTestingModule],
            providers: [   { provide: Router}]
        });
    });
    
 

it('should have h3 with Recepients', async( () => {
let  fixture = TestBed.createComponent(RecepientComponent);
 //  let service = fixture.debugElement.injector.get(RecepientService);
 let   comp = fixture.debugElement.componentInstance;
    // query for the title <h1> by CSS element selector
  let  de = fixture.debugElement;
   let el = de.nativeElement;
expect (el.querySelector('h3').textContent).toContain('Recepients');

}) );

it('should return some data ' , async (() => {
    let  fixture = TestBed.createComponent(RecepientComponent);
 //  let service = fixture.debugElement.injector.get(RecepientService);
 let   comp = fixture.debugElement.componentInstance;
    // query for the title <h1> by CSS element selector
  let  de = fixture.debugElement;
   let el = de.nativeElement;
    expect(el.querySelector('.btn').textContent ).toContain('Add Recepient');
}));

it('should navigate to add recepient ' ,  inject([Router], (router: Router) => { // ...
    let  fixture = TestBed.createComponent(RecepientComponent);
 
 let   comp = fixture.debugElement.componentInstance;
    // query for the title <h1> by CSS element selector
  let  de = fixture.debugElement;
   let el = de.nativeElement;
   debugger;
    
   // let addButton = el.querySelector('.btn').click();
     el.querySelector('.btn').triggerEventHandler('click', null);
      // args passed to router.navigateByUrl()
     el.detectChanges();
      expect(el.querySelector('h3')).toBe('recepient detail');
} ));

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

});


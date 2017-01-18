import { RecepientService } from './recepient.service';
import { StaticRecepientService } from './static.recepient.service';
import { RecepientModel } from '../models/recepientModel';
import { ResponseOptions, Response, Http, BaseRequestOptions, RequestMethod, HttpModule } from '@angular/http';
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

const mockHttpProvider = {
    deps: [MockBackend, BaseRequestOptions],
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
    }
}

describe('RecepientService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                RecepientService, StaticRecepientService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend, options) => new Http(backend, options),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });
    });
    let data: RecepientModel[];
    let selected:RecepientModel;
    it('should construct RecepientService  and check if url of web api point should and get data from mockreceient service', async(inject(
        [RecepientService, MockBackend, StaticRecepientService], (service, mockBackend, staticService) => {
            expect(service).toBeDefined();
            expect(service.url).toBe('http://localhost/ControlSubmissionApi/api/Recepients');
            staticService.getRecepients().subscribe(r => { this.data = r; console.log(this.data); } );
        })));

    describe('getRecepients', () => {
        it('should parse return 4 recepient from the service call',
          async(inject(
                       [RecepientService, MockBackend, StaticRecepientService], (service, mockBackend, staticService) =>
                       { mockBackend.connections.subscribe(conn => {
                         conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(staticService.mockResponse })));
                       });
                    const result = service.getRecepients();
                    result.subscribe(
                    r => { this.data = r; expect(this.data.length).toBe(4); },
                    error => this.errorMessage = <any>error,
                    () => {console.log('done');}
                 })
             ));
            });

    it('should parse return 1 recepient from the service call by id', async(inject(
        [RecepientService, MockBackend, StaticRecepientService], (service, mockBackend, staticService) => {
            staticService.getRecepient(1007);
            console.log(staticService.selectedRecord);
            mockBackend.connections.subscribe(conn => {
            conn.mockRespond(new Response(new ResponseOptions({ body:
                JSON.stringify(staticService.selectedRecord) })));
            });

            let result = service.getRecepient(1007);
            result.subscribe(
                r => { selected = r;   console.log(selected); expect (  selected.Id  ).toBe(1007);},
                error => this.errorMessage = <any>error,
                () =>{ }
              })
            ));
        });
});
});
});
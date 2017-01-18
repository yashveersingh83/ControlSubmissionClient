<!DOCTYPE html>
<br />
<br />
<br />
<br />

<div class="panel panel-default">
    <!--<my-spinner [isRunning]="isRequesting"></my-spinner>-->
    <div class="panel panel-default">
        <div class="panel-heading">
            <div class="btn-group pull-right">
                <button type="button" class="btn btn-primary btn-xs" id="addRecepient" (click)="onAdd()">Add Recepient</button>
            </div>
            <h3 class="panel-title">Recepients</h3>
        </div>

        <div class="panel-body" *ngIf="recepients && recepients.length > 0">
            <table class="table table-striped table-condensed table-bordered table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>LastName</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let  recepient of recepients">
                        <td> <input type="button" class="btn btn-primary btn-xs" value="View" (click)="onSelect(recepient)" /> </td>
                        <th scope="row">
                            <a></a> {{recepient.Id}}</th>
                        <td>{{ recepient.FirstName }}</td>
                        <td>{{recepient.LastName }}</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div class="panel-body" *ngIf="recepients && recepients.length == 0">
            No Records present.
        </div>
    </div>


    `        }
                 })
});

});


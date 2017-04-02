﻿<!DOCTYPE html>
<br />
<br />
<br />
<br />

<div class="panel panel-default col-lg-10">

    <div class="panel-heading">
        <!--<span class="glyphicon glyphicon-collapse-down pull-right" *ngIf="!panel.collapsed"></span>
        <span class="glyphicon glyphicon-collapse-up  pull-right " *ngIf="panel.collapsed"></span>-->
        <h3 class="panel-title">Search MileStones</h3>
    </div>
    <div class="panel-body">

        <div class="form-group">
            <label class="col-md-2 control-label">Milestone Name</label>
            <div class="col-md-2">
                <input type="text" #mileStoneName placeholder="Search" class="col-md-4 form-control" />
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-success  pull-right" (click)="onSearch(mileStoneName.value)">Search MileStone</button>
            </div>
        </div>
    </div>
</div>
<div class="panel panel-default col-lg-10">

    <div class="panel-heading">
        <div class="btn-group pull-right">
            <button type="button" class="btn btn-success btn-xs pull-right" (click)="onAdd()">Add MileStone</button>
        </div>
        <h3 class="panel-title">MileStones</h3>
    </div>
    <dx-load-indicator class='<large></large>-indicator' [visible]="loadingVisible">
    </dx-load-indicator>

    <div id="grid" class="panel-body" *ngIf="milestones && milestones.length > 0">

        <dx-data-grid [dataSource]="milestones" [rowAlternationEnabled]="true">
            <dxo-paging [pageSize]="3"></dxo-paging>
            <dxo-pager [showPageSizeSelector]="true" [visible]="true" [allowedPageSizes]="[5, 10, 20]" [showInfo]="true">
            </dxo-pager>

            <dxo-search-panel [visible]="true" [width]="240" placeholder="Search..."></dxo-search-panel>
            <dxo-filter-row [visible]="true"></dxo-filter-row>

            <dxo-export [enabled]="true"></dxo-export>

            <dxi-column dataField="Id"></dxi-column>
            <dxi-column dataField="Name"></dxi-column>
            <dxi-column dataField="StartDate" dataType="date"></dxi-column>

        </dx-data-grid>


        <div *ngIf="totalItems >0">

            <ng-pagination [totalItems]="totalItems" [(ngModel)]="currentPage" [maxSize]="maxSize" (pageChanged)="pageChanged($event)" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="First" last-text="Last"></ng-pagination>
        </div>
        <!--  -->
    </div>
    <div class="panel-body" *ngIf="milestones && milestones.length == 0">
        No Records present.
    </div>
</div>  this.router.navigate(['/milestones', milestone.Id]);
    }
    onAdd() {
        this.router.navigate(['/milestones/add']);
    }
    onSearch(mileStoneName: string) {

        this._service.searchMileStones(mileStoneName).subscribe(
            milestones => {
                this.milestones = milestones.data; this.totalItems = milestones.total;
                console.log("total");
                console.log(this.totalItems);
                this.currentPage = 1;


            },
            error => this.errorMessage = <any>error

        );

        this.setPage(this.currentPage);
    }
}

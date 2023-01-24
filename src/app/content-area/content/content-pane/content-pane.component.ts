import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { NewMailComponent } from './newmail/newmail.component';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';
import { AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { DataService } from '../../../data-service';
import { SplitterComponent } from '@syncfusion/ej2-angular-layouts';

@Component({
    selector: 'content-pane-section',
    templateUrl: './content-pane.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class ContentPaneComponent implements OnInit {

    /** Configurations for the Content pane page */
    constructor(private _data: DataService) {
    }
    @ViewChild('newmailPane')
    public newMailComponent: NewMailComponent;
    @ViewChild('accordian')
    public acrdnObj: AccordionComponent;

    public ngOnInit(): void { 
    }

    public ngAfterViewInit(): void {
        this._data.newMailComponent = this.newMailComponent;
        this._data.acrdnObj = this.acrdnObj;
    }
}
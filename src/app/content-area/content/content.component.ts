import { Component, ViewEncapsulation, OnInit, ViewChild, AfterViewInit,EventEmitter, Output } from '@angular/core';
import { SplitterComponent } from '@syncfusion/ej2-angular-layouts';
import { DataService } from '../../data-service';
@Component({
    selector: 'content-section',
    templateUrl: './content.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class ContentComponent implements AfterViewInit {

    /** Configurations for the Content page */
    constructor(private data: DataService) {
    }
    @Output()
    contentEvent= new EventEmitter();

    public hideSideBar(): void {
        this.data.hideSideBar();
    }
    @ViewChild('horizontal') 
    public splitterObj:SplitterComponent;
    public isDesktopMode:boolean = true;
    public ngAfterViewInit(): void {
        this.renderSplitter();
        this.contentEvent.emit();
    }
    public renderSplitter(): void {
        this.splitterObj.paneSettings = [
            { size: '38%', min: '38%',content: '#message-pane-div'},
            { size: '63%', min: '40%', content: '#reading-pane-div' }];
    }
}
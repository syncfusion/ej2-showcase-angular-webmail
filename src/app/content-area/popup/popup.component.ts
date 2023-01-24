import { Component, ViewEncapsulation,ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { userName, userMail } from '../../data/datasource';
@Component({
    selector: 'popup-section',
    templateUrl: './popup.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class PopupComponent implements OnInit {

    /** Configurations for the popup page */
    constructor() {
    }
    @ViewChild('popup') public sidebar: SidebarComponent;
    public type: string;

    public showSidebar(): void {
        this.sidebar.show()
    }
    public hideSidebar(): void {
        this.sidebar.hide()
    }
    // Right Sidebar dropdown binding properties
    public userName: string = userName;
    public userMail: string = userMail;

    public ngOnInit(): void {
        this.type = "Push";
    }
}
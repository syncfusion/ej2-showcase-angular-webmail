import { Component, ViewEncapsulation,ViewChild, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { userName, userMail } from '../../data/datasource';
@Component({
    selector: 'popup-section',
    templateUrl: './popup.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class PopupComponent implements OnInit {

    /** Configurations for the popup page */
    constructor(private buttonClick: DataService) {
    }
    @ViewChild('popup') public sidebar: SidebarComponent;
    public type: string;

    public clickButton() {
        this.buttonClick.onCloseClick.emit();
    }
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
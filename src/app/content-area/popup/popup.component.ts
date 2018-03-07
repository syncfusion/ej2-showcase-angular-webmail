import { Component, ViewEncapsulation, OnInit } from '@angular/core';
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

    // Right Sidebar dropdown binding properties
    public userName: string = userName;
    public userMail: string = userMail;

    public ngOnInit(): void {
    }
}
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'sidebar-section',
    templateUrl: './sidebar.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class SidebarComponent implements OnInit {

    /** Configurations for the Sidebar page */
    constructor() {
    }

    public ngOnInit(): void {
    }
}
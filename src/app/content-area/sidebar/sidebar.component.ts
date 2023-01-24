import { Component, ViewChild, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'sidebar-section',
    templateUrl: './sidebar.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class LeftSidebarComponent implements OnInit {

    /** Configurations for the Sidebar page */
    constructor() {
    }
    ngOnInit(): void {
        this.type="Push";
    }

    @ViewChild('sidebar') public sidebar: SidebarComponent;
    public type: string;
   public showSidebar(): void {
        this.sidebar.show()
    }
   public hideSidebar(): void {
        this.sidebar.hide()
    }
}
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DataService } from '../../data-service';
@Component({
    selector: 'content-section',
    templateUrl: './content.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class ContentComponent implements OnInit {

    /** Configurations for the Content page */
    constructor(private data: DataService) {
    }

    public hideSideBar(): void {
        this.data.hideSideBar();
    }

    public ngOnInit(): void {
    }
}
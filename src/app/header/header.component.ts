import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { userName } from './../data/datasource';

@Component({
    selector: 'header-section',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent implements OnInit {

    /** Configurations for the Header page */
    constructor() {
    }

    public username: string = userName;

    public ngOnInit(): void {
    }
}
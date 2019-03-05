import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { getContacts, userName, userMail } from '../../../data/datasource';
import { DataService } from '../../../data-service';

@Component({
    selector: 'search-section',
    templateUrl: './search.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class SearchComponent implements OnInit {

    /** Configurations for the search page */
    constructor(private _data: DataService) {
        this.contactsList = getContacts();
    }

    // AutoComplete binding properties
    public contactsList: {[key: string]: Object}[] = this._data.contactsList;
    public searchFields: Object = this._data.searchFields;
    public acClearButton: boolean = false;
    public userName: string = userName;
    public userMail: string = userMail;

    public autoSearchSelect(args: ChangeEventArgs): void {
        this._data.autoSearchSelect(args);
    }

    public autoSearchFocus(args: Object): void {
        document.getElementsByClassName('search-div')[0].classList.add('search-focus');
    }

    public autoSearchBlur(args: Object): void {
        document.getElementsByClassName('search-div')[0].classList.remove('search-focus');
    }

    public hideSideBar(): void {
        this._data.hideSideBar();
    }

    public ngOnInit(): void {
    }
}
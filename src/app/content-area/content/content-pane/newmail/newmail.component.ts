import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent, ClickEventArgs } from '@syncfusion/ej2-ng-navigations';
import { MultiSelectComponent, FilteringEventArgs } from '@syncfusion/ej2-ng-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { getContacts } from '../../../../data/datasource';
import { DataService } from '../../../../data-service';

@Component({
    selector: 'newmail-section',
    templateUrl: 'newmail.component.html'
})

export class NewMailComponent {

    /** Configurations for the new mail page */
    constructor(private data: DataService) {
    }

    @ViewChild('autoTo')
    public autoToList: MultiSelectComponent;
    @ViewChild('autoCc')
    public autoCCList: MultiSelectComponent;
    @ViewChild('toolbarHeader')
    public toolbarHeader1: ToolbarComponent;
    @ViewChild('toolbarMailOption')
    public toolbarMail: ToolbarComponent;

    public contactsList: {[key: string]: Object}[] = getContacts();
    public moreMailList: { [key: string]: Object }[] = [
        { text: 'Save draft' }, { text: 'Show From' }, { text: 'Check Names' }, { text: 'Show message options' }
    ];
    public dropdownField: Object = { text: 'text', value: 'text' };
    public multiSelectFields: Object = { text: 'MailId', value: 'MailId' };
    public multiSelectWidth: string = 'calc(100% - 60px)';
    public isNewWindow: boolean = true;
    public selectedToolbarItem: string = '';

    public toolbarNewMailClick(args: ClickEventArgs): void {
        if (args.item) {
            if (args.item.cssClass === 'tb-item-window-mail' || args.item.cssClass === 'tb-item-back-mail') {
                this.selectedToolbarItem = args.item.cssClass;
            } else if (args.item.text === 'Send' || args.item.text === 'Discard') {
                this.selectedToolbarItem = args.item.text;
            }
        }
    }

    public resetSelectedToolbarItem(text: string): void {
        this.selectedToolbarItem = text;
    }

    public clearMailForm(): void {
        if (this.autoCCList.value) {
            this.autoCCList.value = [] as [string];
        }
        if (this.autoToList.value) {
            this.autoToList.value = [] as [string];
        }
        (document.getElementById('txtSubject') as HTMLInputElement).value = '';
        document.getElementById('mailContentMessage').innerHTML = '';
    }

    public sendClick(): void {
        this.data.sendClick();
    }

    public onFiltering(e: FilteringEventArgs): void {
        let query: Query = new Query();
        query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
        e.updateData(this.contactsList, query);
    }

    public onFocus(): void {
        document.getElementsByClassName('mail-subject e-input-group')[0].classList.add('e-input-focus');
    }

    public onBlur(): void {
        document.getElementsByClassName('mail-subject e-input-group')[0].classList.remove('e-input-focus');
    }

    public showMailDialog(option: string, selectedMessage: {[key: string]: Object}): void {
        this.clearMailForm();
        let key: string = '';
        this.toolbarHeader1.refreshOverflow();
        this.toolbarMail.refreshOverflow();
        if (selectedMessage) {
            if (option === 'Reply Tooltip') {
                key = 'Email';
                this.autoToList.value = [selectedMessage[key].toString()];
            } else if (option !== 'New') {
                if (option !== 'Forward') {
                    if (option !== 'Reply') {
                        key = 'CCMail';
                        this.autoCCList.value =  selectedMessage[key] as [string];
                    }
                    key = 'Email';
                    this.autoToList.value = [selectedMessage[key].toString()];
                }
                key = 'ContactTitle';
                (document.getElementById('txtSubject') as HTMLInputElement).value = selectedMessage[key].toString();
                key = 'Message';
                if (selectedMessage[key]) {
                    document.getElementById('mailContentMessage').innerHTML = selectedMessage[key].toString();
                } else {
                    document.getElementById('mailContentMessage').innerHTML =
                    decodeURI('%3Cdiv%20id=%22box%22%20style=%22padding:10px;%20border:%20none;%20height:%20auto;' +
                        '%22%20contenteditable=%22true%22%20data-gramm_id=%223898c552-c710-10db-69ec-08371185eb3f%22%20' +
                        'data-gramm=%22true%22%20spellcheck=%22false%22%20data-gramm_editor=%22true%22%3E%3Cp%20class=%22' +
                        'MsoNormal%22%3EDear%20Name,&nbsp;%3C/p%3E%0A%0A%3Cp%20class=%22MsoNormal%22%3EI%20really%20' +
                        'appreciate%20your%20understanding%20and%20support%20regarding%0Athe%20changes%20we\'re%20' +
                        'making%20to%20the%20project%20plan.&nbsp;%3C/p%3E%0A%0A%3Cp%20class=%22' +
                        'MsoNormal%22%3EThank%20you%20for%20your%20confidence%20in%20me.%20I\'m%20sure%20' +
                        'you\'re%20going%0Ato%20be%20pleased%20with%20the%20results.&nbsp;%3C/p%3E%0A%0A%3Cp%20class=%22' +
                        'MsoNormal%22%3EBest%20Regards,%3Cbr%3E%0AYour%20Name%3Co:p%3E%3C/o:p%3E%3C/p%3E%0A%0A%20%20%20%20%3C/div%3E');
                }
            }
        }
    }
}



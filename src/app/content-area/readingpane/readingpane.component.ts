import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ToolbarComponent, AccordionComponent, ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { MultiSelectComponent, SelectEventArgs as DropDownSelectEventArgs, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { getContacts } from '../../data/datasource';

@Component({
    selector: 'readingpane-section',
    templateUrl: 'readingpane.component.html'
})

export class ReadingPaneComponent implements AfterViewInit {
    
    /** Configurations for the Reading pane page */
    constructor() {
    }

    @ViewChild('rpReplyToolbar')
    public rplyToolbar: ToolbarComponent;
    @ViewChild('rpNewmailToolbar')
    public toolbarHeader1: ToolbarComponent;
    @ViewChild('rpAutoTo')
    public autoToList: MultiSelectComponent;
    @ViewChild('rpAutoCc')
    public autoCCList: MultiSelectComponent;
    @ViewChild('rpRTEToolbar')
    public toolbarMail: ToolbarComponent;
    @ViewChild('rpAccordian')
    public acrdnObj: AccordionComponent;

    public selectedRPToolbarItem: string = '';
    public ddlLastRplyValueRP: string = 'Reply All';
    public dropdownSelectRP: boolean = false;
    private selectedMessage: {[key: string]: Object} = null;

    public contactsList: {[key: string]: Object}[] = getContacts();
    public multiSelectFields: Object = { text: 'MailId', value: 'MailId' };
    public multiSelectWidth: string = 'calc(100% - 60px)';

    public replyList: { [key: string]: Object }[] = [
        { text: 'Reply' }, { text: 'Reply All' }, { text: 'Forward' }
    ];

    public moreList: { [key: string]: Object }[] = [
        { text: 'Mark as unread' }, { text: 'Mark as read' }, { text: 'Flag' }, { text: 'Clear Flag' }
    ];

    public moreMailList: { [key: string]: Object }[] = [
        { text: 'Save draft' }, { text: 'Show From' }, { text: 'Check Names' }, { text: 'Show message options' }
    ];

    public onFiltering(e: FilteringEventArgs): void {
        let query: Query = new Query();
        query = (e.text !== '') ? query.where('text', 'startswith', e.text, true) : query;
        e.updateData(this.contactsList, query);
    }

    public ngAfterViewInit(): void {
    }

    public toolbarClick(args: ClickEventArgs): void {
        if (args.item) {
            if (args.item.prefixIcon === 'ej-icon-Close tb-icons') {
                this.selectedRPToolbarItem = 'ClosePopup';
            } else if (args.item.text === 'Delete' || args.item.text === 'Junk') {
                this.selectedRPToolbarItem = args.item.text + 'Click';
            }
        }
    }

    public replyAllSelect(args: DropDownSelectEventArgs): void {
        if (args.itemData.text) {
            this.showMailDialogRP(args.itemData.text);
            this.ddlLastRplyValueRP = args.itemData.text;
            this.dropdownSelectRP = true;
        }
    }

    public btnRPSendClick(): void {
        this.selectedRPToolbarItem = 'SendClick';
    }

    public btnRPDiscardClick(): void {
        this.selectedRPToolbarItem = 'DiscardClick';
    }

    public toolbarNewMailClick(args: ClickEventArgs): void {
        if (args.item) {
            if (args.item.prefixIcon === 'ej-icon-Close tb-icons') {
                this.selectedRPToolbarItem = 'ClosePopup';
            } else if (args.item.text === 'Send' || args.item.text === 'Discard') {
                this.selectedRPToolbarItem = args.item.text + 'Click';
            }
        }
    }

    public resetRPSelectedItem(text: string): void {
        this.selectedRPToolbarItem = text;
        this.dropdownSelectRP = false;
    }

    public clearMailForm(): void {
        if (this.autoCCList.value) {
            this.autoCCList.value = [];
        }
        if (this.autoToList.value) {
            this.autoToList.value = [];
        }
        (document.getElementById('rp-txtSubject') as HTMLInputElement).value = '';
        document.getElementById('rp-mailContentMessage').innerHTML = '';
    }

    public bindReadingPaneData(selectedMessage1: {[key: string]: Object}): void {
        this.selectedMessage = selectedMessage1;
        document.getElementById('rp-accordian').style.display = '';
        document.getElementById('rp-mailarea').style.display = 'none';
        document.getElementById('rp-toolbar_newmail').style.display = 'none';
        document.getElementById('rp-toolbar_align').style.display = '';
        this.rplyToolbar.refreshOverflow();
        let key: string = 'ContactTitle';
        if (this.acrdnObj.items.length === 0) {
            this.acrdnObj.addItem({
                content: '#rpAccodianContent', expanded: true, header: this.selectedMessage[key].toString()
            });
        }
        let headerTitle: HTMLElement = document.getElementById('rp-accordian');
        key = 'ContactTitle';
        headerTitle.getElementsByClassName('e-acrdn-header-content')[0].innerHTML = this.selectedMessage[key].toString();
        key = 'Image';
        (headerTitle.getElementsByClassName('logo logo-style2')[0] as HTMLElement).style.background =
            'url(' + this.selectedMessage[key].toString().replace('assets/images/images/', 'assets/images/large/') + ')  no-repeat 50% 50%';
        key = 'text';
        document.getElementById('rp-sub').innerHTML = this.selectedMessage[key].toString();
        key = 'Date';
        let dateString: string = this.selectedMessage[key].toString();
        key = 'Time';
        document.getElementById('rp-date').innerHTML = dateString + ' ' + this.selectedMessage[key].toString();
        key = 'CC';
        document.getElementById('rp-to').innerHTML = (this.selectedMessage[key].toString()).replace(/,/g, ' ; ');
        key = 'Message';
        if (this.selectedMessage[key]) {
            document.getElementById('rp-accContent').innerHTML = this.selectedMessage[key].toString();
        } else {
            document.getElementById('rp-accContent').innerHTML =
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

    public showMailDialogRP(option: string): void {
        document.getElementById('rp-accordian').style.display = 'none';
        document.getElementById('rp-mailarea').style.display = '';
        document.getElementById('rp-toolbar_newmail').style.display = '';
        document.getElementById('rp-toolbar_align').style.display = 'none';
        this.clearMailForm();
        let key: string = '';
        this.toolbarHeader1.refreshOverflow();
        this.toolbarMail.refreshOverflow();
        if (option !== 'Forward') {
            if (option !== 'Reply') {
                key = 'CCMail';
                this.autoCCList.value =  this.selectedMessage[key] as [string];
            }
            key = 'Email';
            this.autoToList.value = [this.selectedMessage[key].toString()];
        }
        key = 'ContactTitle';
        (document.getElementById('rp-txtSubject') as HTMLInputElement).value = this.selectedMessage[key].toString();
        key = 'Message';
        if (this.selectedMessage[key]) {
            document.getElementById('rp-mailContentMessage').innerHTML = this.selectedMessage[key].toString();
        } else {
            document.getElementById('rp-mailContentMessage').innerHTML =
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
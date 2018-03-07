import { Injectable } from '@angular/core';
import { TreeViewComponent, ToolbarComponent, AccordionComponent, ContextMenuComponent,
    ClickEventArgs } from '@syncfusion/ej2-ng-navigations';
import { ListViewComponent } from '@syncfusion/ej2-ng-lists';
import { AutoCompleteComponent, ChangeEventArgs } from '@syncfusion/ej2-ng-dropdowns';
import { DialogComponent, PopupComponent } from '@syncfusion/ej2-ng-popups';
import { NewMailComponent } from './content-area/content/content-pane/newmail/newmail.component';
import { ReadingPaneComponent } from './content-area/readingpane/readingpane.component';
import { folderData, messageDataSourceNew } from './data/datasource';

@Injectable()

export class DataService {

    // Class Members
    public treeDataSource: { [key: string]: Object }[] = folderData;
    public treeviewSelectedData: { [key: string]: Object } = null;
    public treeSelectedElement: HTMLElement = null;
    public selectedFolderName: string = '';
    public selectedListElement: HTMLElement = null;
    public isItemClick: boolean = false;
    public isMenuClick: boolean = false;
    private hoverOnPopup: boolean = false;
    public ddlReplyAllValue: string = 'Reply All';
    public dropdownSelect: boolean = false;

    // AutoComplete binding properties
    public contactsList: {[key: string]: Object}[] = [];
    public searchFields: Object = { text: 'MailId', value: 'MailId' };

    public grpListObj: ListViewComponent;
    public filterContextMenu: ContextMenuComponent;
    public popupMail: PopupComponent;
    public newMailComponent: NewMailComponent;
    public acrdnObj: AccordionComponent;
    public dlgNewWindow: DialogComponent;
    public dlgSentMail: DialogComponent;
    public dlgSentMailNew: DialogComponent;
    public dlgReplyAllWindow: DialogComponent;
    public toolbarMobile: ToolbarComponent;
    public acSearchMobile: AutoCompleteComponent;
    public readingPaneComponent: ReadingPaneComponent;
    public treeObj: TreeViewComponent;

    // List View binding properties
    public messageDataSource: { [key: string]: Object }[] = messageDataSourceNew;

    public autoSearchSelect(args: ChangeEventArgs): void {
        if (args.value) {
            let dataSource: { [key: string]: Object }[] = this.messageDataSource;
            this.grpListObj.dataSource = this.getFilteredDataSource(dataSource, 'Email', args.value.toString());
            document.getElementById('spanFilterText').innerHTML = 'All Search';
        } else {
            this.resetSelectedFolderData();
        }
    }

    public markAllRead(): void {
        let dataSource: {[key: string]: Object}[] = this.getFilteredDataSource(this.messageDataSource, 'Folder', this.selectedFolderName);
        for (let i: number = 0; i < dataSource.length; i++) {
            let key: string = 'ReadStyle';
            dataSource[i][key] = 'Read';
            key = 'ReadTitle';
            dataSource[i][key] = 'Mark as unread';
            this.setReadCount('Unread');
        }
        this.grpListObj.dataSource = dataSource;
    }

    public showNewMailPopup(option: string): void {
        let selectedMessage: { [key: string]: Object } = this.getSelectedMessage();
        this.showToolbarItems('none');
        document.getElementById('reading-pane-div').className += ' new-mail';
        document.getElementById('accordian').style.display = 'none';
        document.getElementById('emptyMessageDiv').style.display = 'none';
        document.getElementById('mailarea').style.display = '';
        document.getElementById('mailarea').appendChild(document.getElementById('newmailContent'));
        (document.getElementsByClassName('tb-item-new-mail')[0] as HTMLElement).style.display = 'none';
        (document.getElementsByClassName('tb-item-mark-read')[0] as HTMLElement).style.display = 'none';
        this.newMailComponent.showMailDialog(option, selectedMessage);
    }

    public showSelectedMessage(): void {
        document.getElementById('emptyMessageDiv').style.display = 'none';
        document.getElementById('mailarea').style.display = 'none';
        document.getElementById('accordian').style.display = '';
        this.showToolbarItems('inline-flex');
        let readingPane: HTMLElement = document.getElementById('reading-pane-div');
        readingPane.className = readingPane.className.replace(' new-mail', '');
        (document.getElementsByClassName('tb-item-new-mail')[0] as HTMLElement).style.display = 'inline-flex';
        (document.getElementsByClassName('tb-item-mark-read')[0] as HTMLElement).style.display = 'none';
    }

    public getSelectedMessage(): { [key: string]: Object } {
        if (this.grpListObj.getSelectedItems()) {
            let selectedData: { [key: string]: Object } = this.grpListObj.getSelectedItems().data as {};
            let key: string = 'ContactID';
            for (let i: number = 0; i < this.messageDataSource.length; i++) {
                if (this.messageDataSource[i][key].toString() === selectedData[key].toString()) {
                    return this.messageDataSource[i];
                }
            }
        }
        return null;
    }

    public getFilteredDataSource(dataSource: { [key: string]: Object }[], columnName: string, columnValue: string):
    { [key: string]: Object }[] {
        let folderData: { [key: string]: Object }[] = [];
        for (let i: number = 0; i < dataSource.length; i++) {
            let data: { [key: string]: Object } = dataSource[i];
            if (data[columnName] && data[columnName].toString() === columnValue) {
                folderData.push(data);
            }
        }
        return folderData;
    }

    public sortList(listItems: { [key: string]: Object }[]): { [key: string]: Object }[] {
        for (let i: number = 0; i < listItems.length; i++) {
            listItems[i] = this.setCategory1(listItems[i]);
        }
        return listItems;
    }

    public setCategory1(listItem: { [key: string]: Object }): {} {
        let key: string = 'Date';
        let date: Date = new Date(listItem[key] as string);
        let currentData: Date = new Date();
        let oldDate: number = date.getDate();
        let oldMonth: number = date.getMonth();
        let oldYear: number = date.getFullYear();

        let currentDate: number = currentData.getDate();
        let currentMonth: number = currentData.getMonth();
        let currentYear: number = currentData.getFullYear();

        key = 'category';
        if ( oldYear === currentYear) {
            if (oldMonth === currentMonth) {
                if (oldDate === currentDate) {
                    listItem[key] = 'Today';
                } else if (oldDate === currentDate - 1) {
                    listItem[key] = 'Yesterday';
                } else if ( oldDate + 8 >= currentDate ) {
                    listItem[key] = 'Last Week';
                } else if ( oldDate + 15 >= currentDate ) {
                    listItem[key] = 'Two Weeks Ago';
                } else if ( oldDate + 22 >= currentDate ) {
                    listItem[key] = 'Three Weeks Ago';
                } else {
                    listItem[key] = 'Earlier this Month';
                }
            } else {
                listItem[key] = 'Last Month';
            }
        } else {
            listItem[key] = 'Older';
        }
        return listItem;
    }

    public showEmptyMessage(): void {
        document.getElementById('emptyMessageDiv').style.display = '';
        document.getElementById('mailarea').style.display = 'none';
        document.getElementById('accordian').style.display = 'none';
        this.showToolbarItems('none');
        let readingPane: HTMLElement = document.getElementById('reading-pane-div');
        readingPane.className = readingPane.className.replace(' new-mail', '');
        (document.getElementsByClassName('tb-item-new-mail')[0] as HTMLElement).style.display = 'inline-flex';
        (document.getElementsByClassName('tb-item-mark-read')[0] as HTMLElement).style.display = 'inline-flex';
    }

    public showToolbarItems(displayType: string): void {
        let selectedFolder: HTMLCollectionOf<HTMLElement> =
        document.getElementsByClassName('tb-item-Selected') as HTMLCollectionOf<HTMLElement>;
        for (let i: number = 0; i < selectedFolder.length; i++) {
            selectedFolder[i].style.display = displayType;
        }
    }

    public setReadStyleMessage(contactID: string, readStyle: string): void {
        let data: { [key: string]: Object } = this.getSelectedMessage();
        this.selectedFolderName = data.Folder as string;
        if (data !== null) {
            let key: string = 'ReadStyle';
            data[key] = readStyle;
            key = 'ReadTitle';
            let readNode: HTMLElement =
            this.selectedListElement.getElementsByClassName('e-btn-icon ej-icon-Mark-as-read')[0].parentNode as HTMLElement;
            if (readStyle === 'Read') {
                data[key] = 'Mark as unread';
                (this.selectedListElement.getElementsByClassName('subjectstyle')[0] as HTMLElement).className = 'subjectstyle';
                (this.selectedListElement.getElementsByClassName('template-container')[0] as HTMLElement).className =
                'template-container';
                readNode.title = 'Mark as unread';
                this.setReadCount('Unread');
            } else {
                data[key] = 'Mark as read';
                readNode.title = 'Mark as read';
                (this.selectedListElement.getElementsByClassName('subjectstyle')[0] as HTMLElement).className =
                'subjectstyle Unread';
                (this.selectedListElement.getElementsByClassName('template-container')[0] as HTMLElement).className =
                'template-container Unread-parent';
                this.setReadCount('Read');
            }
        }
    }

    public setReadCount(readType: string): void {
        let selectedFolder: HTMLCollectionOf<HTMLElement> =
        document.getElementsByClassName('treeCount ' + this.selectedFolderName) as HTMLCollectionOf<HTMLElement>;
        for (let i: number = 0; i < selectedFolder.length; i++) {
            let count: number = selectedFolder[i].innerHTML  === '' ? 0 : Number(selectedFolder[i].innerHTML);
            if (readType === 'Unread') {
                if (count > 0) {
                    count -= 1;
                }
            } else {
                count += 1;
            }
            selectedFolder[i].innerHTML = count === 0 ? '' : count.toString();
        }
    }

    public toolbarClick(args: ClickEventArgs): void {
        if (args.item) {
            if (args.item.prefixIcon === 'ej-icon-Menu tb-icons') {
                let sidebarElement: Element = document.getElementsByClassName('sidebar')[0];
                sidebarElement.className = 'sidebar show';
                let overlayElement: Element = document.getElementsByClassName('overlay-element')[0];
                overlayElement.className = 'overlay-element show1';
                this.isMenuClick = true;
            } else if (args.item.prefixIcon === 'ej-icon-Back') {
                let contentElement: Element = document.getElementsByClassName('row content')[0];
                contentElement.className = contentElement.className.replace('show-reading-pane', 'show-message-pane');
                let contentWrapper: Element = document.getElementsByClassName('content-wrapper')[0];
                if (contentWrapper.className.indexOf('show-search-option') !== -1) {
                    this.resetSelectedFolderData();
                }
                contentWrapper.className = 'content-wrapper';
            } else if (args.item.prefixIcon === 'ej-icon-Mark-as-read tb-icons') {
                this.markAllRead();
            } else if (args.item.text === 'Delete' || args.item.prefixIcon === 'ej-icon-Delete' ||
                args.item.text === 'Junk' ) {
                let selectedMessage: { [key: string]: Object } = this.getSelectedMessage();
                this.messageDataSource.splice(this.messageDataSource.indexOf(selectedMessage), 1);
                let key: string = 'ContactID';
                this.grpListObj.removeItem({ id: selectedMessage[key].toString() });
                if (args.item.prefixIcon === 'ej-icon-Delete' && window.innerWidth < 605) {
                    let contentElement: Element = document.getElementsByClassName('row content')[0];
                    contentElement.className = contentElement.className.replace('show-reading-pane', 'show-message-pane');
                } else {
                    this.showEmptyMessage();
                }
            } else if ((args.item.text === 'New' ||  args.item.prefixIcon === 'ej-icon-Create-New') ||
                (args.item.prefixIcon === 'ej-icon-Reply-All')) {
                if (args.item.prefixIcon === 'ej-icon-Create-New') {
                    let contentWrapper: Element = document.getElementsByClassName('content-wrapper')[0];
                    contentWrapper.className = 'content-wrapper hide-message-option';
                }
                let option: string = 'New';
                if (args.item.prefixIcon === 'ej-icon-Reply-All') {
                    option = 'Reply All';
                }
                if (window.innerWidth < 605) {
                    let contentElement: Element = document.getElementsByClassName('row content')[0];
                    contentElement.className = contentElement.className.replace('show-message-pane', 'show-reading-pane');
                }
                this.showNewMailPopup(option);
            } else if (args.item.prefixIcon === 'ej-icon-Send') {
                this.sendClick();
            } else if (args.item.prefixIcon === 'ej-icon-Search') {
                let contentWrapper: Element = document.getElementsByClassName('content-wrapper')[0];
                contentWrapper.className = 'content-wrapper show-search-option';
                this.toolbarMobile.refreshOverflow();
            } else if (args.item.prefixIcon === 'ej-icon-Close') {
                this.acSearchMobile.value = '';
            } else if (args.item.prefixIcon === 'ej-icon-Copy tb-icons') {
                if (!this.dlgReplyAllWindow.content) {
                    this.dlgReplyAllWindow.content = document.getElementById('reading-pane-popup');
                    this.dlgReplyAllWindow.refresh();
                }
                this.dlgReplyAllWindow.show();
                this.readingPaneComponent.bindReadingPaneData(this.getSelectedMessage());
            }
        }
    }

    public sendClick(): void {
        if (this.dlgNewWindow.visible || this.dlgReplyAllWindow.visible) {
            this.dlgSentMailNew.show();
        } else {
            this.dlgSentMail.show();
        }
    }

    public resetSelectedFolderData(): void {
        document.getElementById('spanFilterText').innerHTML = this.selectedFolderName;
        let dataSource: { [key: string]: Object }[] =
        this.getFilteredDataSource(this.messageDataSource, 'Folder', this.selectedFolderName);
        this.grpListObj.dataSource = dataSource;
        this.clearFilterMenu();
        this.filterContextMenu.items[0].iconCss = 'ej-icon-Right';
        this.filterContextMenu.dataBind();
    }

    public clearFilterMenu(): void {
        for (let i: number = 0; i < this.filterContextMenu.items.length; i++) {
            if (this.filterContextMenu.items[i].items.length === 0) {
                this.filterContextMenu.items[i].iconCss = '';
            }
        }
    }
    public cloneObject(obj: { [key: string]: Object }): { [key: string]: Object } {
        let keys: string[] = Object.keys(obj);
        let cloneObject: { [key: string]: Object } = {};
        for (let i: number = 0; i < keys.length; i++) {
            cloneObject[keys[i]] = obj[keys[i]];
        }
        return cloneObject;
    }
    public popupMouseEnter(): void {
        this.hoverOnPopup = true;
    }
    public popupMouseLeave(): void {
        this.hoverOnPopup = false;
        this.hidePopup();
    }
    public hidePopup(): void {
        setTimeout(() => { if (!this.hoverOnPopup) { this.popupMail.hide(); } }, 2000);
    }

    public showPopup1(): void {
        let newMessageData: { [key: string]: Object } = this.cloneObject(this.messageDataSource[Math.floor(Math.random() * (50 - 3) + 2)]);
        let key: string = 'ContactName';
        document.getElementById('popup-contact').innerHTML = newMessageData[key].toString();
        key = 'ContactTitle';
        document.getElementById('popup-subject').innerHTML = newMessageData[key].toString();
        key = 'Message';
        document.getElementById('popup-message-content').innerHTML = newMessageData[key].toString();
        key = 'Image';
        document.getElementById('popup-image').style.background = 'url(' +
        newMessageData[key].toString().replace('assets/images/images/', 'assets/images/large/') + ') no-repeat 50% 50%';
        key = 'Folder';
        newMessageData[key] = 'Inbox';
        key = 'ReadStyle';
        newMessageData[key] = 'Unread';
        key = 'ReadTitle';
        newMessageData[key] = 'Mark as read';
        key = 'Flagged';
        newMessageData[key] = 'None';
        key = 'FlagTitle';
        newMessageData[key] = 'Flag this message';
        key = 'ContactID';
        newMessageData[key] = 'SF20032';
        let element: HTMLElement = <HTMLElement>document.querySelector('#popupMailId');
        element.onmouseenter = this.popupMouseEnter.bind(this);
        element.onmouseleave = this.popupMouseLeave.bind(this);
        if (window.innerWidth > 605) {
            this.popupMail.show();
        } else {
            this.popupMail.hide();
        }
        let dataSource: { [key: string]: Object }[] = this.getFilteredDataSource(this.messageDataSource, 'Folder', this.selectedFolderName);
        dataSource.splice(0, 0, newMessageData);
        this.messageDataSource.splice(0, 0, newMessageData);
        this.grpListObj.dataSource = dataSource;
        this.setReadCount('Read');
        setTimeout(() => { this.hidePopup(); }, 2000);
    }

    public flagListItem (target: HTMLElement, selectedMessage: {[key: string]: Object}): void {
        let key: string = 'Flagged';
        let parentNode: HTMLElement = target.parentNode as HTMLElement;
        if (target.className.indexOf('Flagged') !== -1) {
            parentNode.title = 'Flag this Message';
            target.className = 'e-btn-icon ej-icon-Flag_1';
            selectedMessage[key] = 'None';
            key = 'FlagTitle';
            selectedMessage[key] = 'Flag this Message';
        } else {
            parentNode.title = 'Remove the flag from this message';
            target.className = 'e-btn-icon ej-icon-Flag_1 Flagged';
            selectedMessage[key] = 'Flagged';
            key = 'FlagTitle';
            selectedMessage[key] = 'Remove the flag from this message';
        }
    }    

    public hideSideBar(): void {
        if (!this.isMenuClick) {
            let sidebar: Element = document.getElementsByClassName('sidebar')[0];
            if (sidebar.className.indexOf('sidebar show') !== -1) {
                sidebar.className = 'sidebar';
                let overlayElement: Element = document.getElementsByClassName('overlay-element')[0];
                overlayElement.className = 'overlay-element';
            }
        }
        this.isMenuClick = false;
    }

    constructor() {
        this.messageDataSource = this.sortList(this.messageDataSource);
    }
}

import { Component, HostListener, ViewChild, AfterContentInit } from '@angular/core';
import { ContextMenuComponent, MenuItemModel, MenuEventArgs, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-ng-navigations';
import { SortOrder } from '@syncfusion/ej2-ng-lists';
import { DialogComponent, PopupComponent } from '@syncfusion/ej2-ng-popups';
import { ReadingPaneComponent } from './readingpane/readingpane.component';
import { DataService } from '../data-service';

@Component({
    selector: 'content-area-section',
    templateUrl: 'content-area.component.html',
})

export class ContentAreaComponent implements AfterContentInit {

    constructor(private data: DataService) {
    }

    @ViewChild('treeContextMenu')
    private treeContextMenu: ContextMenuComponent;
    @ViewChild('filterContextMenu')
    private filterContextMenu: ContextMenuComponent;
    @ViewChild('sentMailDialog')
    public dlgSentMail: DialogComponent;
    @ViewChild('sentMailNewWindow')
    public dlgSentMailNew: DialogComponent;
    @ViewChild('discardDialog')
    public dlgDiscard: DialogComponent;
    @ViewChild('discardNewWindow')
    public dlgDiscardNew: DialogComponent;
    @ViewChild('newMailSeparateDialog')
    public dlgReplyAllWindow: DialogComponent;
    @ViewChild('replyAllSeparateDialog')
    public dlgNewWindow: DialogComponent;
    @ViewChild('favoriteDialog')
    public dlgFavorite: DialogComponent;
    @ViewChild('deleteDialog')
    public dlgDelete: DialogComponent;
    @ViewChild('popupMail')
    public popupMail: PopupComponent;
    @ViewChild('readingPaneElement')
    public readingPaneComponent: ReadingPaneComponent;

    // Tree ContextMenu binding properties
    public treeMenuItems: MenuItemModel[] = [
        { text: 'Create new subfolder' }, { text: 'Rename' }, { text: 'Delete' },
        { text: 'Add to Favorites' }, { text: 'Mark all as read' }
    ];

    // Filter ContextMenu binding properties
    public filterMenuItems: MenuItemModel[] = [
        { text: 'All', iconCss: 'ej-icon-Right' }, { text: 'Unread' },
        { text: 'Flagged' }, { separator: true }, { text: 'Sort by', items: [{ text: 'None' },
        { text: 'Ascending', iconCss: 'ej-icon-Right' }, { text: 'Descending' }] }
    ];

    // Dialog binding properties
    public dialogVisibility: boolean = false;
    public dlgTarget: HTMLElement = document.body;
    public dlgAnimationSettings: Object = { effect: 'None' };
    public sentDlgButtons: Object[] = [{
        click: this.sendExitClick.bind(this),
        buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true }
    }];
    public sentNewDlgButtons: Object[] = [{
        click: this.sendExitClick.bind(this),
        buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true }
    }];
    public discardDlgContent: string = '<div class="discardOkDiv dlg-content-style1" style="cursor:pointer">' +
        '<span style="color:white" class="dlg-discard-text-style">Discard</span> <br/>' +
        '<span style="color:white; font-weight:normal" class="dlg-discard-child-text-style">This message will be deleted</span>' +
    '</div> <br/>' +
    '<div class="discardCancelDiv dlg-content-style" style="cursor:pointer">' +
        '<span class="dlg-discard-text-style">Don'+"'"+'t Discard</span> <br/>' +
        '<span style="font-weight:normal" class="dlg-discard-child-text-style">Return to the message for further editing</span>' +
    '</div>';
    public favoritesDlgButtons: Object[] = [
        {
            click: this.btnFavoriteOKClick.bind(this),
            buttonModel: { content: 'Yes', cssClass: 'e-flat', isPrimary: true }
        },
        {
            click: this.btnFavoriteCancelClick.bind(this),
            buttonModel: { content: 'No', cssClass: 'e-flat' }
        }
    ];

    public deleteDlgButtons: Object[] =  [
        {
            click: this.btnDeleteOKClick.bind(this), buttonModel: { content: 'Yes', cssClass: 'e-flat', isPrimary: true }
        },
        {
            click: this.btnDeleteCancelClick.bind(this), buttonModel: { content: 'No', cssClass: 'e-flat' }
        }
    ];

    // Popup binding properties
    public popupPosition: { [key: string]: Object } = { X: 'right', Y: 'top' };
    public popupRelativeElement: string = '#content-area';
    public popupOffsetX: number = -5;
    public popupOffsetY: number = 5;

    //Class Members
    public modalDialog: boolean = true;
    public nonModalDialog: boolean = false;
    private registerDiscardEvents: boolean = false;
    private lastIndex: number = 31;

    public ngAfterContentInit(): void {
        document.getElementById('btnDiscard').addEventListener('click', this.discardButtonClick.bind(this));
        document.getElementById('btnFilter').addEventListener('click', this.btnFilterClick.bind(this));
        document.getElementById('btnCloseButton').addEventListener('click', this.btnCloseClick.bind(this));
        document.onclick = this.documentClick.bind(this);
        document.ondblclick = this.documentDoubleClick.bind(this);
        let popupContent: HTMLElement = document.getElementById('popupContent');
        popupContent.onclick = this.popupContentClick.bind(this);
    }

    public treeMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
        let key: string = 'PID';
        let parentNode: string = this.data.treeviewSelectedData[key].toString();
        key = 'Favorite';
        let favorite: string = this.data.treeviewSelectedData[key].toString();
        if (favorite === 'Favorite-Composite') {
            favorite = 'Remove from Favorites';
        } else {
            favorite = 'Add to Favorites';
        }
        this.treeContextMenu.items[3].text = favorite;
        this.treeContextMenu.dataBind();
        if (parentNode === '1') {
            this.treeContextMenu.hideItems(['Create new subfolder', 'Rename']);
        } else {
            this.treeContextMenu.showItems(['Create new subfolder', 'Rename']);
        }
    }

    public treeMenuSelect(args: MenuEventArgs): void {
        if (args.item) {
            let target: HTMLElement = this.data.treeSelectedElement.getElementsByClassName('e-btn-icon')[0] as HTMLElement;
            if (args.item.text === 'Create new subfolder') {
                this.lastIndex += 1;
                let key: string = 'ID';
                let item: {[key: string]: Object} = {
                    'ID': this.lastIndex, 'PID': this.data.treeviewSelectedData[key].toString(), 'Name': 'New Folder' + this.lastIndex,
                    'HasChild': false, 'Expanded': false, 'Count': '',
                    'Favorite': 'Favorite', 'FavoriteMessage': 'Add to Favorites'
                };
                this.data.treeObj.addNodes([item], null, null);
                this.data.treeDataSource.push(item);
            } else if (args.item.text === 'Rename') {
                this.data.treeObj.beginEdit(this.data.treeviewSelectedData['ID'].toString());
            } else if (args.item.text === 'Delete') {
                if (this.data.selectedFolderName === 'Deleted Items') {
                    this.dlgDelete.content = '<div class="dlg-content-style"><span>Are you sure you want to permanently' +
                    ' delete all the items in Deleted items?</span></div>';
                    this.dlgDelete.header = 'Delete All';
                } else {
                    this.dlgDelete.content = '<div class="dlg-content-style"><span>Are you sure you want to move all ' +
                    'its content to Deleted items?</span></div>';
                    this.dlgDelete.header = 'Delete Folder Items';
                }
                this.dlgDelete.show();
            } else if (args.item.text === 'Mark all as read') {
                this.data.markAllRead();
            } else if (args.item.text === 'Add to Favorites') {
                this.favoriteAction('add', target);
            } else if (args.item.text === 'Remove from Favorites') {
                this.favoriteAction('Remove', target);
            }
        }
    }

    public filterMenuSelect(args: MenuEventArgs): void {
        if (args.item) {
            if (args.item.text === 'Ascending' || args.item.text === 'Descending' ||  args.item.text === 'None') {
                this.data.grpListObj.sortOrder = args.item.text as SortOrder;
                for (let i: number = 0; i < this.filterContextMenu.items[4].items.length; i++) {
                    this.filterContextMenu.items[4].items[i].iconCss = '';
                }
                args.item.iconCss = 'ej-icon-Right';
            } else if (args.item.text !== 'Sort by') {
                this.data.clearFilterMenu();
                let dataSource: { [key: string]: Object }[] =
                this.data.getFilteredDataSource(this.data.messageDataSource, 'Folder', this.data.selectedFolderName);
                if (args.item.text === 'All') {
                    this.data.grpListObj.dataSource = dataSource;
                } else if (args.item.text === 'Flagged') {
                    this.data.grpListObj.dataSource = this.data.getFilteredDataSource(dataSource, 'Flagged', 'Flagged');
                } else if (args.item.text === 'Unread') {
                    this.data.grpListObj.dataSource = this.data.getFilteredDataSource(dataSource, 'ReadStyle', 'Unread');
                }
                args.item.iconCss = 'ej-icon-Right';
            }
        }
    }

    private btnFilterClick(): void {
        let clientRect: ClientRect = document.getElementById('btnFilter').getBoundingClientRect();
        this.filterContextMenu.open(clientRect.top + 25, clientRect.left);
    }

    private btnCloseClick(): void {
        let contentWrapper: Element = document.getElementsByClassName('row content')[0];
        contentWrapper.className = contentWrapper.className.replace(' show-header-content', '');
        let headerRP: Element = document.getElementsByClassName('header-right-pane selected')[0];
        headerRP.className = 'header-right-pane';
    }

    private discardButtonClick(): void {
        if (!this.registerDiscardEvents) {
            let discardContent: HTMLCollectionOf<HTMLElement> =
            document.getElementsByClassName('discardOkDiv') as HTMLCollectionOf<HTMLElement>;
            for (let i: number = 0; i < discardContent.length; i++) {
                discardContent[i].addEventListener('click', this.discardOkClick.bind(this));
            }
            discardContent = document.getElementsByClassName('discardCancelDiv') as HTMLCollectionOf<HTMLElement>;
            for (let i: number = 0; i < discardContent.length; i++) {
                discardContent[i].addEventListener('click', this.discardCancelClick.bind(this));
            }
            this.registerDiscardEvents = true;
        }
        if (this.dlgNewWindow.visible || this.dlgReplyAllWindow.visible) {
            this.dlgDiscardNew.show();
        } else {
            this.dlgDiscard.show();
        }
    }

    private discardOkClick(): void {
        this.discardClick();
    }

    private discardCancelClick(): void {
        if (this.dlgNewWindow.visible || this.dlgReplyAllWindow.visible) {
            this.dlgDiscardNew.hide();
        } else {
            this.dlgDiscard.hide();
        }
    }

    private sendExitClick(): void {
        if (this.dlgNewWindow.visible || this.dlgReplyAllWindow.visible) {
            this.dlgSentMailNew.hide();
        } else {
            this.dlgSentMail.hide();
        }
        this.discardClick();
    }

    private btnFavoriteOKClick(): void {
        let key: string = 'PID';
        let parentID: string = this.data.treeviewSelectedData[key].toString();
        if (parentID === '1') {
            key = 'ID';
            this.removeTreeItem(this.data.treeviewSelectedData[key].toString());
            this.data.treeDataSource.splice(this.data.treeDataSource.indexOf(this.data.treeviewSelectedData), 1);
        } else {
            for (let i: number = 0; i < this.data.treeDataSource.length; i++) {
                let key: string = 'PID';
                let treeData: { [key: string]: Object } = this.data.treeDataSource[i];
                if (treeData[key] && treeData[key].toString() === '1') {
                    key = 'Name';
                    if (treeData[key].toString() === this.data.selectedFolderName) {
                        key = 'ID';
                        this.removeTreeItem(treeData[key].toString());
                        this.data.treeDataSource.splice(i, 1);
                        break;
                    }
                }
            }
        }
        this.dlgFavorite.hide();
    }

    private btnFavoriteCancelClick(): void {
        this.dlgFavorite.hide();
    }

    private btnDeleteOKClick(): void {
        let folderMessages: { [key: string]: Object }[] =
        this.data.getFilteredDataSource(this.data.messageDataSource, 'Folder', this.data.selectedFolderName);
        if (this.data.selectedFolderName === 'Deleted Items') {
            for (let i: number = 0; i < folderMessages.length; i++) {
                this.data.messageDataSource.splice(this.data.messageDataSource.indexOf(folderMessages[i]), 1);
            }
        } else {
            for (let i: number = 0; i < folderMessages.length; i++) {
                let key: string = 'Folder';
                folderMessages[i][key] = 'Deleted Items';
            }
        }
        this.data.grpListObj.dataSource = [];
        this.data.showEmptyMessage();
        this.dlgDelete.hide();
    }

    private btnDeleteCancelClick(): void {
        this.dlgDelete.hide();
    }

    private removeTreeItem(id: string): void {
        this.data.treeObj.removeNodes([id]);
        let element: Element = document.getElementsByClassName('ej-icon-Favorite-Composite ' + this.data.selectedFolderName)[0];
        element.className = 'e-btn-icon ej-icon-Favorite ' + this.data.selectedFolderName;
        let parent: HTMLElement = element.parentNode as HTMLElement;
        parent.title = 'Add to Favorites';
        let key: string = 'FavoriteMessage';
        this.data.treeviewSelectedData[key] = 'Add to Favorites';
        key = 'Favorite';
        this.data.treeviewSelectedData[key] = 'Favorite';
    }

    public discardClick(): void {
        if (this.data.grpListObj.getSelectedItems()) {
            this.data.showSelectedMessage();
        } else {
            this.data.showEmptyMessage();
        }
        if (this.dlgNewWindow.visible || this.dlgReplyAllWindow.visible) {
            this.dlgDiscardNew.hide();
            if (this.dlgNewWindow.visible) {
                this.dlgNewWindow.hide();
            } else if (this.dlgReplyAllWindow.visible) {
                this.dlgReplyAllWindow.hide();
            }
        } else {
            this.dlgDiscard.hide();
        }
        let contentWrapper: Element = document.getElementsByClassName('content-wrapper')[0];
        contentWrapper.className = 'content-wrapper';
    }

    private favoriteAction(type: string, target: HTMLElement): void {
        if (type === 'add') {
            target.className = 'e-btn-icon ej-icon-Favorite-Composite ' + this.data.selectedFolderName;
            (target.parentNode as HTMLElement).title = 'Remove from Favorites';
            let treeData: { [key: string]: Object } = this.data.cloneObject(this.data.treeviewSelectedData);
            let key: string = 'PID';
            treeData[key] = '1';
            key = 'ID';
            treeData[key] = Number(treeData[key]) + 111;
            key = 'Favorite';
            this.data.treeviewSelectedData[key] = treeData[key] = 'Favorite-Composite';
            key = 'Count';
            treeData[key] = (target.parentNode.parentNode.childNodes[1].childNodes[0] as HTMLElement).innerHTML;
            key = 'FavoriteMessage';
            this.data.treeviewSelectedData[key] = treeData[key] = 'Remove from Favorites';
            this.data.treeDataSource.push(treeData);
            this.data.treeObj.addNodes([treeData], null, null);
        } else {
            let ss: HTMLElement = document.getElementsByClassName('sidebar')[0] as HTMLElement;
            this.dlgFavorite.show();
        }
    }

    private headerContent(headerElement: HTMLElement): void {
        let headerRP: Element = document.getElementsByClassName('header-right-pane selected')[0];
        if (headerRP) {
            headerRP.className = 'header-right-pane';
        }
        let contentWrapper: Element = document.getElementsByClassName('row content')[0];
        contentWrapper.className = contentWrapper.className.replace(' show-header-content', '') + ' show-header-content';
        let notificationElement: HTMLElement = document.getElementsByClassName('notification-content')[0] as HTMLElement;
        let settingsElement: HTMLElement = document.getElementsByClassName('settings-content')[0] as HTMLElement;
        let aboutElement: HTMLElement = document.getElementsByClassName('about-content')[0] as HTMLElement;
        let userElement: HTMLElement = document.getElementsByClassName('profile-content')[0] as HTMLElement;
        let txtHeaderContent: HTMLElement = document.getElementById('txtHeaderContent');
        notificationElement.style.display = 'none';
        settingsElement.style.display = 'none';
        aboutElement.style.display = 'none';
        userElement.style.display = 'none';
        headerElement.className = headerElement.className + ' ' + 'selected';
        switch (headerElement.id) {
            case 'notification-div':
                notificationElement.style.display = 'block';
                txtHeaderContent.innerHTML = 'Notification';
                break;
            case 'settings-div':
                settingsElement.style.display = 'block';
                txtHeaderContent.innerHTML = 'Settings';
                break;
            case 'profile-div':
                userElement.style.display = 'block';
                txtHeaderContent.innerHTML = 'My accounts';
                break;
            case 'about-div':
                aboutElement.style.display = 'block';
                txtHeaderContent.innerHTML = 'Help';
                break;
        }
    }

    @HostListener('window:resize', ['$event'])
    @HostListener('window:load', ['$event'])
    private onWindowResize(evt: Event): void {
        let headerNode: Element = document.getElementsByClassName('header navbar')[0];
        let contentArea: Element = document.getElementsByClassName('row content')[0];
        let isReadingPane: boolean = (contentArea.className.indexOf('show-reading-pane') === -1);
        if (!isReadingPane && window.innerWidth < 605) {
            return;
        }
        if (window.innerWidth < 1200) {
            headerNode.className = 'header navbar head-pane-hide';
            let headerRP: Element = document.getElementsByClassName('header-right-pane selected')[0];
            if (headerRP) {
                headerRP.className = 'header-right-pane';
            }
            contentArea.className = 'row content';
        } else {
            headerNode.className = 'header navbar';
            if (contentArea.className.indexOf('show-header-content') === -1) {
                contentArea.className = 'row content';
            } else {
                contentArea.className = 'row content show-header-content';
            }
        }
        if (window.innerWidth < 1090) {
            contentArea.className = 'row content sidebar-hide';
        } else {
            this.hideSideBar();
        }
        if (window.innerWidth < 605) {
            if (isReadingPane) {
                contentArea.className = contentArea.className + ' ' + 'show-message-pane';
            }
        }
    }

    public hideSideBar(): void {
        this.data.hideSideBar();
    }

    public documentDoubleClick(evt: MouseEvent): void {
        if (evt.target instanceof HTMLElement) {
            let target: HTMLElement = evt.target as HTMLElement;
            if (target.className.indexOf('template-container') !== -1) {
                if (!this.dlgReplyAllWindow.content) {
                    this.dlgReplyAllWindow.content = document.getElementById('reading-pane-popup');
                    this.dlgReplyAllWindow.refresh();
                }
                this.dlgReplyAllWindow.show();
                this.readingPaneComponent.bindReadingPaneData(this.data.getSelectedMessage());
            }
        }
    }

    public documentClick(evt: MouseEvent): void {
        let key: string = 'parentID';
        if (evt.target instanceof HTMLElement) {
            let target: HTMLElement = evt.target as HTMLElement;
            if (target.className.indexOf('header-right-pane') !== -1) {
                this.headerContent(evt.target as HTMLElement);
            } else if (!this.readingPaneComponent.dropdownSelectRP && this.dlgReplyAllWindow.visible &&
                target.innerText === this.readingPaneComponent.ddlLastRplyValueRP ) {
                this.readingPaneComponent.showMailDialogRP(this.readingPaneComponent.ddlLastRplyValueRP);
            } else if (!this.data.dropdownSelect && !this.dlgReplyAllWindow.visible && target.innerText === this.data.ddlReplyAllValue) {
                this.data.showNewMailPopup(this.data.ddlReplyAllValue);
            } else {
                if (target.tagName === 'SPAN' || (target.children && target.children.length > 0)) {
                    target = target.tagName === 'SPAN' ? target : target.children[0] as HTMLElement;
                    if (target.className === 'e-btn-icon ej-icon-Favorite ' + this.data.selectedFolderName) {
                        this.favoriteAction('add', target);
                    } else if (target.className === 'e-btn-icon ej-icon-Favorite-Composite ' + this.data.selectedFolderName) {
                        this.favoriteAction('remove', target);
                    } else if ((target.parentNode as HTMLElement).className === 'listview-btn') {
                        let selectedMessage: { [key: string]: Object } = this.data.getSelectedMessage();
                        if (target.className.indexOf('ej-icon-Delete') !== -1) {
                            this.data.messageDataSource.splice(this.data.messageDataSource.indexOf(selectedMessage), 1);
                            key = 'ContactID';
                            this.data.grpListObj.removeItem({ id: selectedMessage[key].toString() });
                        } else if (target.className.indexOf('ej-icon-Flag_1') !== -1) {
                            this.data.flagListItem(target, selectedMessage);
                        } else if (target.className.indexOf('ej-icon-Mark-as-read') !== -1 && !this.data.isItemClick) {
                            let parentNode: HTMLElement = target.parentNode as HTMLElement;
                            if (parentNode.title === 'Mark as read') {
                                parentNode.title = 'Mark as unread';
                                key = 'ContactID';
                                this.data.setReadStyleMessage(selectedMessage[key].toString(), 'Read');
                            } else if (parentNode.title === 'Mark as unread') {
                                parentNode.title = 'Mark as read';
                                key = 'ContactID';
                                this.data.setReadStyleMessage(selectedMessage[key].toString(), 'Unread');
                            }
                        }
                    }
                }
            }
        }
        this.newMailWindowItemClick();
        this.readingPaneItemClick();
        this.data.isItemClick = false;
        this.data.dropdownSelect = false;
    }

    public newMailWindowItemClick(): void {
        if (this.data.newMailComponent.selectedToolbarItem) {
            if (this.data.newMailComponent.selectedToolbarItem === 'tb-item-window-mail') {
                this.discardClick();
                this.dlgNewWindow.content = document.getElementById('newmailContent');
                this.dlgNewWindow.refresh();
                this.dlgNewWindow.show();
            } else if (this.data.newMailComponent.selectedToolbarItem === 'tb-item-back-mail') {
                this.dlgNewWindow.hide();
            } else if (this.data.newMailComponent.selectedToolbarItem === 'Send') {
                this.data.sendClick();
            } else if (this.data.newMailComponent.selectedToolbarItem === 'Discard') {
                this.discardButtonClick();
            }
        }
        this.data.newMailComponent.resetSelectedToolbarItem('');
    }

    public readingPaneItemClick(): void {
        if (this.readingPaneComponent.selectedRPToolbarItem) {
            if (this.readingPaneComponent.selectedRPToolbarItem === 'SendClick') {
                this.data.sendClick();
            } else if (this.readingPaneComponent.selectedRPToolbarItem === 'DiscardClick') {
                this.discardButtonClick();
            } else if (this.readingPaneComponent.selectedRPToolbarItem === 'DeleteClick' ||
                this.readingPaneComponent.selectedRPToolbarItem === 'JunkClick') {
                let selectedMessage: { [key: string]: Object } = this.data.getSelectedMessage();
                this.data.messageDataSource.splice(this.data.messageDataSource.indexOf(selectedMessage), 1);
                let key: string = 'ContactID';
                this.data.grpListObj.removeItem({ id: selectedMessage[key].toString() });
                this.data.showEmptyMessage();
                this.dlgReplyAllWindow.hide();
            } else if (this.readingPaneComponent.selectedRPToolbarItem === 'ClosePopup') {
                this.dlgReplyAllWindow.hide();
            }
        }
        this.readingPaneComponent.resetRPSelectedItem('');
    }

    public popupContentClick(evt: MouseEvent): void {
        if (evt.target instanceof HTMLElement) {
            let target: HTMLElement = evt.target as HTMLElement;
            if (target.className !== 'e-btn-icon ej-icon-Close' && window.innerWidth >= 1090) {
                let key: string = 'ContactID';
                this.data.grpListObj.selectItem({ id: this.data.messageDataSource[0][key].toString() });
                if (!this.dlgReplyAllWindow.content) {
                    this.dlgReplyAllWindow.content = document.getElementById('reading-pane-popup');
                    this.dlgReplyAllWindow.refresh();
                }
                this.dlgReplyAllWindow.show();
                this.readingPaneComponent.bindReadingPaneData(this.data.messageDataSource[0]);
            }
            this.popupMail.hide();
        }
    }

    public ngAfterViewInit(): void {
        this.data.filterContextMenu = this.filterContextMenu;
        this.data.popupMail = this.popupMail;
        this.data.dlgNewWindow = this.dlgNewWindow;
        this.data.dlgReplyAllWindow = this.dlgReplyAllWindow;
        this.data.dlgSentMailNew = this.dlgSentMailNew;
        this.data.dlgSentMail = this.dlgSentMail;
        this.data.readingPaneComponent = this.readingPaneComponent;
    }
}
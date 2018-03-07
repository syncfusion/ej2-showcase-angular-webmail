import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { TreeViewComponent, NodeSelectEventArgs } from '@syncfusion/ej2-ng-navigations';
import { DataService } from '../../../data-service';

@Component({
    selector: 'navigation-section',
    templateUrl: './navigation.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class NavigationComponent implements OnInit {

    /** Configurations for the navigation page */
    constructor(private _data: DataService) {
    }

    @ViewChild('tree')
    public treeObj: TreeViewComponent;

    // Tree View binding properties
    public treeDataSource: { [key: string]: Object }[] = this._data.treeDataSource;
    public treeviewFields: Object = { dataSource: this._data.treeDataSource, id: 'ID', text: 'Name', parentID: 'PID',
    hasChildren: 'HasChild', expanded: 'Expanded' };
    public showPopupOnInit: boolean = false;

    public nodeSelected(args: NodeSelectEventArgs): void {
        let key: string = 'id';
        this._data.treeSelectedElement = <HTMLElement>args.node;
        this._data.treeviewSelectedData = this.getTreeData1(args.nodeData[key].toString());
        this._data.selectedFolderName = (args.node.getElementsByClassName('treeName')[0] as HTMLElement).innerHTML;
        this._data.grpListObj.dataSource =
        this._data.sortList(this._data.getFilteredDataSource(this._data.messageDataSource, 'Folder', this._data.selectedFolderName));
        this._data.showEmptyMessage();
        document.getElementById('spanFilterText').innerHTML = this._data.selectedFolderName;
        if (!this.showPopupOnInit) {
            this._data.showPopup1();
            this.showPopupOnInit = true;
        }
        let element1: Element = document.getElementsByClassName('tb-item-inbox')[0];
        if (element1) {
            element1 = element1.getElementsByClassName('e-tbar-btn-text')[0];
            element1.innerHTML = this._data.selectedFolderName;
        }
        this._data.hideSideBar();
    }

    private getTreeData1(id: string): { [key: string]: Object } {
        for (let i: number = 0; i < this._data.treeDataSource.length; i++) {
            let key: string = 'ID';
            if (this._data.treeDataSource[i][key].toString() === id) {
                return this._data.treeDataSource[i];
            }
        }
        return null;
    }

    public showPopup(): void {
        setTimeout(this.openPopup.bind(this), 3000);
    }

    public openPopup(): void {
        this.treeObj.selectedNodes = ['8'];
    }

    public ngOnInit(): void {
    }

    public ngAfterContentInit(): void {
        this.showPopup();
    }

    public ngAfterViewInit(): void {
        this._data.treeObj = this.treeObj;
    }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TreeViewModule,AppBarModule,SidebarModule, ToolbarModule, AccordionModule, ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AutoCompleteModule,MentionModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule, TooltipModule } from '@syncfusion/ej2-angular-popups';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { ReadingPaneComponent } from './content-area/readingpane/readingpane.component';
import { LeftSidebarComponent } from './content-area/sidebar/sidebar.component';
import { SearchComponent } from './content-area/sidebar/search/search.component';
import { NavigationComponent } from './content-area/sidebar/navigation/navigation.component';
import { PopupComponent } from './content-area/popup/popup.component';
import { ContentComponent } from './content-area/content/content.component';
import { ToolsComponent } from './content-area/content/tools/tools.component';
import { MessagePaneComponent } from './content-area/content/message-pane/message-pane.component';
import { ContentPaneComponent } from './content-area/content/content-pane/content-pane.component';
import { NewMailComponent } from './content-area/content/content-pane/newmail/newmail.component';

import { DataService } from './data-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentAreaComponent,
    ReadingPaneComponent,
    LeftSidebarComponent,
    SearchComponent,
    NavigationComponent,
    PopupComponent,
    ContentComponent,
    ToolsComponent,
    MessagePaneComponent,
    ContentPaneComponent,
    NewMailComponent
  ],
  imports: [
    BrowserModule,
    TreeViewModule,
    ToolbarModule,
    AccordionModule,
    ContextMenuModule,
    ListViewModule,
    ButtonModule,
    AutoCompleteModule,
    DropDownListModule,
    MultiSelectModule,
    DialogModule,
    TooltipModule,
    AppBarModule,
    MentionModule,
    SidebarModule,
    SplitterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TabTitleComponent} from './components/tab/tab-title.component';
import { TabContentComponent } from './components/tab/tab-content.component';

@NgModule({
  declarations: [ TabsComponent, TabComponent, TabTitleComponent, TabContentComponent ],
  exports:      [ TabsComponent, TabComponent, TabTitleComponent, TabContentComponent ],
  imports:      [ CommonModule ]
})
export class TabsModule { }

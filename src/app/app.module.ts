import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

/***************************** COMPONENTS SECTION ****************************/
import { AppComponent } from './app.component';
import { FirstTaskComponent } from './components/first-task/first-task.component';
import { TestComponent } from './components/test/test.component';
import { SecondTaskComponent } from './components/second-task/second-task.component';
import { ViewportComponent } from './components/viewport/viewport.component';
/***************************** END COMPONENTS SECTION ****************************/

/***************************** MODULES SECTION ****************************/
import { TabsModule } from './modules/tabs/tabs.module';
import { SharedModule } from './shared/shared.module';
/***************************** END MODULES SECTION ****************************/

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, TabsModule, SharedModule.forRoot({medium: 641, large: 1008}) ],
  declarations: [ AppComponent, FirstTaskComponent, TestComponent, SecondTaskComponent, ViewportComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

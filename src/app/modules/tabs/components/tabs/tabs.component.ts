import { Component, ContentChildren, QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tabs',
  template: '<ng-content></ng-content>',
})
export class TabsComponent implements OnDestroy, AfterContentInit {
  private count: number;
  private tabsChanges: Subscription;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit() {
    this.init();
  }

  ngOnDestroy() {
    this.tabsChanges.unsubscribe();
  }

  /**
   * Initialize tabs
   */
  private init() {
    this.count = this.tabs.length;

    this.tabs.forEach((item, index) => {
      if (index === 0) {
        item.setActive(true);
      }

      this.tabChanges(item, index);
    });

    this.tabsChanges = this.tabs.changes.subscribe(item => {
      if (this.count > item.length || this.count === 0) {
        this.setTabStatus();
      }

      if (item.length !== 0) {
        this.tabChanges(item.last, item.length - 1);
      }

      this.count = this.tabs.length;
    });
  }

  /**
   *
   * @param item
   * @param index
   */
  private tabChanges(item: any, index: number) {
    item.active$.subscribe((active) => {
      if (active) {
        this.setTabStatus(index);
      }
    });
  }

  /**
   * Change tab status
   *
   * @param activeIndex
   */
  private setTabStatus(activeIndex?: number) {
    let isActive: boolean = false;
    
    this.tabs.forEach((item, index) => {
      if (item.active$.value) {
        isActive = item.active$.value;
      }

      if (typeof activeIndex !== 'undefined' && activeIndex !== index) {
        item.setActive(false);
      }
    });
    
    if (isActive === false && this.tabs.length !== 0) {
       this.tabs.first.setActive(true);
    }
  }
}

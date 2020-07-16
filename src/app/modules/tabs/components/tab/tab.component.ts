import { Component, ContentChildren, QueryList, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TabTitleComponent } from './tab-title.component';
import { TabContentComponent } from './tab-content.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements OnDestroy, AfterViewInit {
  @ContentChildren(TabTitleComponent) title: QueryList<TabTitleComponent>;
  @ContentChildren(TabContentComponent) content: QueryList<TabContentComponent>;

  public tabTitle$: BehaviorSubject<string>   = new BehaviorSubject(null);
  public tabContent$: BehaviorSubject<string> = new BehaviorSubject(null);
  public active$: BehaviorSubject<boolean>    = new BehaviorSubject(false);

  constructor(private cd: ChangeDetectorRef) { }

  ngOnDestroy() {
    this.active$.complete();
    this.tabTitle$.complete();
    this.tabContent$.complete();
  }

  ngAfterViewInit() {
    this.tabTitle$.next(this.title.first.elRef.nativeElement.innerText);
    this.tabContent$.next(this.content.first.elRef.nativeElement.innerHTML);
    this.cd.detectChanges();
  }

  /**
   * Set tab status as active
   *
   * @param active
   */
  public setActive(active: boolean): void {
    this.active$.next(active);
    this.cd.detectChanges();
  }

}

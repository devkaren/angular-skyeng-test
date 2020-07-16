import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {ViewportService} from '../services/viewport.service';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[ifViewportSize]'
})
export class ViewportSizeDirective implements OnDestroy {
  private _windowSubscription: Subscription;
  private _windowSize: string;

  /**
   * Set window size and when window size is equal parameter size, then show element
   *
   * @param size
   */
  @Input('ifViewportSize')
  set window(size: string) {
    this._windowSize = size;
    this.isLarge(this.viewportService.getWindowSizeValue());
  }

  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
      private viewportService: ViewportService
  ) {
    this.viewContainer.clear();

    this._windowSubscription = this.viewportService.getWindowSize().subscribe(size => {
      this.isLarge(size);
    });
  }

  /**
   * Check if window size large, then create
   *
   * @param size
   */
  private isLarge(size: string): void {
    this.viewContainer.clear();

    if (size === this._windowSize) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy() {
    this._windowSubscription.unsubscribe();
  }
}

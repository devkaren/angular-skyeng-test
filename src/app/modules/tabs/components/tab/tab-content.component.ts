import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'tab-content',
  template: '<ng-content></ng-content>',
})
export class TabContentComponent {
  public elRef: ElementRef;

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }
}

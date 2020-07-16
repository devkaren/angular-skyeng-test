import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'tab-title',
  template: '<ng-content></ng-content>',
})
export class TabTitleComponent {
  public elRef: ElementRef;

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }
}

import {Component, Input} from '@angular/core';

@Component({
    selector: 'viewport',
    template: `{{ value }}`,
})
export class ViewportComponent {
    @Input() value: number;
}

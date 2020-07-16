import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.scss']
})
export class FirstTaskComponent implements OnInit {
  public tabs = [ 1, 2 ];

  ngOnInit() {}

  /**
   * Remove tab
   */
  public removeTab() {
    this.tabs = this.tabs.slice(0, -1);
  }

  /**
   * Add tab
   */
  public addTab() {
    this.tabs = [ ...this.tabs, (this.tabs.length + 1) ];
  }
}

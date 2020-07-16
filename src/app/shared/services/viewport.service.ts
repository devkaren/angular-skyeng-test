import {Inject, Injectable} from '@angular/core';
import {Config, IConfig} from '../models/iconfig';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  public windowSize: BehaviorSubject<string>;

  constructor(@Inject(Config) private config: IConfig) {
    this.onResize();

    this.windowSize = new BehaviorSubject(this.getWindowLayoutName(window.innerWidth));
  }

  /**
   * Handle on window resize
   */
  private onResize(): void {
    window.addEventListener('resize', (event: any) => {
      const windowWith: number = event.target.innerWidth;

      this.windowSize.next(this.getWindowLayoutName(windowWith));
    });
  }

  /**
   * Check and get window layout size
   *
   * @param width
   */
  private getWindowLayoutName(width: number): string {
    if (width >= this.config.large) {
      return 'large';
    }

    if (width >= this.config.medium) {
      return 'medium';
    }

    return 'small';
  }

  /**
   * Get updated data for window size
   */
  public getWindowSize(): Observable<string> {
    return this.windowSize.asObservable();
  }

  /**
   * Get value from observable of @windowSize
   */
  public getWindowSizeValue(): string {
    return this.windowSize.value;
  }
}

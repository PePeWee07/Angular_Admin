import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabContextService {
  private activeTabs: Map<string, BehaviorSubject<string>> = new Map();

  setActiveTab$(tabSetName: string, eventKey: string): Observable<string> {
    if (!this.activeTabs.has(tabSetName)) {
      this.activeTabs.set(tabSetName, new BehaviorSubject(''));
    }
    return this.activeTabs.get(tabSetName)!.asObservable();
  }

  changeTab(tabSetName: string, eventKey: string) {
    if (this.activeTabs.has(tabSetName)) {
      this.activeTabs.get(tabSetName)!.next(eventKey);
    }
  }

  initializeActiveTab(tabSetName: string, defaultTab: string) {
    if (!this.activeTabs.has(tabSetName)) {
      this.activeTabs.set(tabSetName, new BehaviorSubject(defaultTab));
    }
  }
}

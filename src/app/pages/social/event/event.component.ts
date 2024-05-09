import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { selectEvent, selectSocialLoading } from '../../../store/Social/social-selector';
import { Store } from '@ngrx/store';
import { fetchEventData } from '../../../store/Social/social-action';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
import { RouterModule } from '@angular/router';
import { MDModalModule } from '../../../Component/modals';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, NgxDatatableModule, LucideAngularModule, FlatpickrModule, RouterModule, MDModalModule, MnDropdownComponent, FormsModule],
  templateUrl: './event.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class EventComponent {
  eventList: any;

  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchEventData());
      this.store.select(selectSocialLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectEvent).subscribe(data => {
        this.eventList = data
      });

    }, 500)
  }

  columns = [
    { name: 'Event Name', prop: 'eventName' },
    { name: 'Start Date', prop: 'startDate' },
    { name: 'End Date', prop: 'endDate' },
    { name: 'Number Registered', prop: 'numberRegistered' },
    { name: 'Total', prop: 'total' },
    { name: 'Status', prop: 'status' },
    { name: 'Action', prop: 'actions' }
  ]
}
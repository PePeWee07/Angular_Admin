import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { events } from '../../../data';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import { MDModalModule } from '../../../Component/modals';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ModalService } from '../../../Component/modals/modal.service';
import { addCalendar, deleteCalendar, fetchCalendar, updateCalendar } from '../../../store/Calendar/calendar.actions';
import { getEvents } from '../../../store/Calendar/calendar.selectors';
import { createEventId } from '../../../data/calendar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-multi-month-stack',
  standalone: true,
  imports: [PageTitleComponent, FullCalendarModule, MDModalModule, FormsModule, ReactiveFormsModule],
  templateUrl: './multi-month-stack.component.html',
  styles: ``
})
export class MultiMonthStackComponent {

  submitted = false;
  eventForm!: UntypedFormGroup;
  isEditMode!: boolean;
  editEvent: any;
  calendarEvents: EventInput[] = [];
  allcalendarEvents: any;

  private store = inject(Store)
  currentDate: any;

  constructor(private formBuilder: UntypedFormBuilder, private modalservice: ModalService) { }

  ngOnInit(): void {

    // Validation
    this.eventForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });

    this.store.dispatch(fetchCalendar()); // Dispatch action to fetch calendar events
    this.store.select(getEvents).subscribe((data) => {
      this.calendarEvents = data;
      this.allcalendarEvents = data;
    });
  }

  /***
* Calender Set
*/
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, listPlugin, timeGridPlugin, multiMonthPlugin,interactionPlugin],
    headerToolbar: {
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
      center: 'title',
      left: 'prev,next,today'
    },
    timeZone: 'UTC',
    editable: true,
    droppable: true,
    selectable: true,
    multiMonthMaxColumns: 1,
    initialView: 'multiMonthYear',
    themeSystem: "tailwindcss",
    initialEvents: this.calendarEvents,
    select: this.openModal.bind(this),
    eventClick: this.handleEventClick.bind(this),
    dateClick: this.handleDateClick.bind(this)
  };

  openModal(events?: any) {
    this.modalservice.open('event-modal');
    this.isEditMode = false;
  }

  // get date
  handleDateClick(date: any) {
    this.currentDate = date.date
  }

  handleEventClick(clickInfo: EventClickArg) {

    this.modalservice.open('event-modal')
    this.isEditMode = true;
    this.editEvent = clickInfo.event;
    this.submitted = false;
    var category = clickInfo.event.classNames.join(" ");
    this.eventForm = this.formBuilder.group({
      title: clickInfo.event.title,
      category: category,
    });
  }

  // Add Event
  addevent() {
    const className = this.eventForm.get('category')!.value;
    const title = this.eventForm.get('title')!.value;

    if (this.isEditMode == false) {
      const newEvent: EventInput = {
        id: createEventId(), // Generate a unique ID for the event
        title,
        classNames: className,
        start: this.currentDate,
        allDay: false,
      };
      this.store.dispatch(addCalendar({ events: newEvent }));

    } else {
      const newevent = {
        allDay: false,
        title,
        id: this.editEvent.id,
        classNames: className,
        start: this.editEvent.start,
      }
      this.store.dispatch(updateCalendar({ events: newevent }))
    }
    this.position();
    this.resetForm();
    this.submitted = true;
  }
  /***
 * Model Position Set
 */
  position() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Event has been saved',
      showConfirmButton: false,
      timer: 1000,
    });
  }

  resetForm() {
    this.eventForm.reset({
      title: '',
      className: '',
    });
    this.modalservice.close('event-modal')
  }

  // Delete Event
  deleteEvent() {
    this.store.dispatch(deleteCalendar({ id: this.editEvent.id }))
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Event has been deleted',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

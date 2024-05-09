import { Component, ElementRef, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

// Calendar
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { events } from '../../../data';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MDModalModule } from '../../../Component/modals';
import { ModalService } from '../../../Component/modals/modal.service';
import { createEventId } from '../../../data/calendar';
import { Store } from '@ngrx/store';
import { addCalendar, addEvent, deleteCalendar, fetchCalendar, updateCalendar, updateCalendarSuccess } from '../../../store/Calendar/calendar.actions';
import { getEvents } from '../../../store/Calendar/calendar.selectors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, FullCalendarModule, FormsModule, MDModalModule, ReactiveFormsModule],
  templateUrl: './calendar.component.html',
  styles: ``
})
export class CalendarComponent {
  newEventDate: any;
  selectedLocale: any = 'en';
  removeCheckbox: any;
  submitted = false;
  eventForm!: UntypedFormGroup;
  isEditMode!: boolean;
  editEvent: any;
  calendarEvents: EventInput[] = [];
  allcalendarEvents: any;
  private store = inject(Store)
  currentDate: any;

  constructor(private elementRef: ElementRef, private formBuilder: UntypedFormBuilder, private modalservice: ModalService) { }

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

  ngAfterViewInit() {
    this.initializeDraggable();
  }

  private initializeDraggable() {
    const externalEventContainerEl = this.getElement('external-events');
    new Draggable(externalEventContainerEl, {
      itemSelector: '.external-event',
      eventData: (eventEl: any) => ({
        title: eventEl.innerText,
        start: new Date(),
        className: eventEl.getAttribute('data-class'),
      }),
    });
  }

  private getElement(id: string): HTMLElement {
    return this.elementRef.nativeElement.querySelector(`#${id}`);
  }

  /***
 * Calender Set
 */
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, listPlugin, interactionPlugin, timeGridPlugin],
    headerToolbar: {
      right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek',
      center: 'title',
      left: 'prev,next,today'
    },
    initialView: 'dayGridMonth',
    initialEvents: this.calendarEvents,
    themeSystem: "tailwindcss",
    timeZone: 'local',
    weekends: true,
    droppable: true,
    editable: true,
    selectable: true,
    businessHours: false,
    selectMirror: true,
    dayMaxEvents: true,
    direction: 'ltr',
    locale: 'en',
    weekNumbers: false,
    drop: (info) => this.handleDrop(info),
    select: this.openModal.bind(this),
    eventClick: this.handleEventClick.bind(this),
    dateClick: this.handleDateClick.bind(this)
  };

  private handleDrop(info: any) {
    if (this.removeCheckbox) {
      info.draggedEl.parentNode.removeChild(info.draggedEl);
    }
  }

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

  removeDrop(event: any) {
    this.removeCheckbox = event.target.checked
  }

  // Calender langulage functionality
  changeLocale() {
    this.calendarOptions.locale = this.selectedLocale
  }

  // Calendar business hours
  changeHours(event: any) {
    this.calendarOptions.businessHours = event.target.checked
  }

  // Calendar Week Number Change
  changeWeekNumber(event: any) {
    this.calendarOptions.weekNumbers = event.target.checked
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

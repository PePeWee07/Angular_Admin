import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
export function createEventId() {
    return String(eventGuid++);
}

var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

const defaultevent = [
    {
        "id": 1,
        "title": "World Braille Day",
        "start": "2022-01-04T00:00:00.000Z",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    },
    {
        "id": 2,
        "title": "World Leprosy Day",
        "start": "2022-01-30",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    },

    {
        "id": 3,
        "title": "International Mother Language Day",
        "start": "2022-02-21",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    },

    {
        "id": 4,
        "title": "International Women's Day",
        "start": "2022-03-08",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    },

    {
        "id": 5,
        "title": "World Thinking Day",
        "start": "2022-02-22",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    },

    {
        "id": 6,
        "title": "International Mother Language Day",
        "start": "2022-03-21",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    },

    {
        "id": 7,
        "title": "World Water Day",
        "start": "2022-03-22",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    },

    {
        "id": 8,
        "title": "World Health Day",
        "start": "2022-04-07",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    },

    {
        "id": 9,
        "title": "International Special Librarians Day",
        "start": "2022-04-16",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    },

    {
        "id": 10,
        "title": "Earth Day",
        "start": "2022-04-22",
        "className": "bg-soft-info",
        "allDay": true,
        "description": "N.A.",
        "location": "N.A."
    }
];

const events: EventInput[] = [
    {
        id: createEventId(),
        title: "All Day Event",
        start: new Date(y, m, 1),
        className: 'w-[100%] text-purple-500 !bg-purple-100 dark:!bg-purple-500/20 border-none rounded-md py-1.5 px-3',
        
    },
    {
        id: createEventId(),
        title: "Long Event",
        start: new Date(y, m, d - 5),
        end: new Date(y, m, d - 2),
        className: "!text-sky-500 w-[100%] !bg-sky-100 dark:!bg-sky-500/20 border-none rounded-md py-1.5 px-3"
    },
    {
        id: createEventId(),
        title: "Repeating Event",
        start: new Date(y, m, d - 3, 16, 0),
        allDay: false,
        className: "text-yellow-500 w-[100%] !bg-yellow-100 dark:!bg-yellow-500/20 border-none rounded-md py-1.5 px-3",  
    },
    {
        id: createEventId(),
        title: "Repeating Event",
        start: new Date(y, m, d + 4, 16, 0),
        allDay: false,
        className: "w-[100%] text-custom-500 !bg-custom-100 dark:!bg-custom-500/20 border-none rounded-md py-1.5 px-3"
    },
    {
        id: createEventId(),
        title: "Meeting",
        start: new Date(y, m, d, 10, 30),
        allDay: false,
        className: "text-green-500 w-[100%] !bg-green-100 dark:!bg-green-500/20 border-none rounded-md py-1.5 px-3"
    },
    {
        id: createEventId(),
        title: "Lunch",
        start: new Date(y, m, d, 12, 0),
        end:new Date(y, m, d, 14, 0),
        allDay: false,
        className: "text-purple-500 w-[100%] !bg-purple-100 dark:!bg-purple-500/20 border-none rounded-md py-1.5 px-3"},
    {
        id: createEventId(),
        title: "Birthday Party",
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false,
        className: "w-[100%] text-sky-500 !bg-sky-100 dark:!bg-sky-500/20 border-none rounded-md py-1.5 px-3",
    },
    {
        id: createEventId(),
        title: "Click for Google",
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/', 
        className: "w-[100%] text-custom-500 !bg-custom-100 dark:!bg-custom-500/20 border-none rounded-md py-1.5 px-3",
    },
];

const calenderDefaultCategories = [
    {
        id: 1,
        title: "New Event Planning",
        type: "success",

    },
    {
        id: 2,
        title: "Meeting",
        type: "info",
    },
    {
        id: 3,
        title: "Generating Reports",
        type: "warning",
    },
    {
        id: 4,
        title: "Create New theme",
        type: "danger",
    },
];

export { calenderDefaultCategories, events, defaultevent };
var calendar;

async function fetchEvents() {
    const response = await fetch('./data/events.json');
    const json = await response.json();
    return json;
}

async function loadEvents() {
    var events = await fetchEvents();
    calendar.setOption('events', events);
}

(() => {
    var calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ja',
        headerToolbar: {
            left: 'prev,next,today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        navLinks: true,
        businessHours: true,
    });
    calendar.render();

    loadEvents();
})();

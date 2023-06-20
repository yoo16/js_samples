var calendar;

const fetchEvents = async () => {
    const response = await fetch('./data/events.json');
    const json = await response.json();
    return json;
}

const loadEvents = async () => {
    var events = await fetchEvents();
    calendar.setOption('events', events);
}

(() => {
    var calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        themeSystem: 'bootstrap5',
        // locale: 'ja',
        headerToolbar: {
            left: 'prev,next,today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        navLinks: true,
        businessHours: true,
    });
    calendar.render();

    calendar.setOption('height', 650);

    loadEvents();
})();

// Funcionalidad del formulario y lista de eventos
document.getElementById('eventForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventDuration = document.getElementById('eventDuration').value;

    const event = {
        name: eventName,
        date: eventDate,
        duration: eventDuration
    };

    addEventToList(event);
    clearForm();
});

function addEventToList(event) {
    const eventList = document.getElementById('eventList');
    const eventItem = document.createElement('li');

    eventItem.innerHTML = `
        <span>${event.name} - ${event.date} - ${event.duration} horas</span>
        <div>
            <button onclick="editEvent(this)">Editar</button>
            <button onclick="deleteEvent(this)">Eliminar</button>
        </div>
    `;

    eventList.appendChild(eventItem);
}

function clearForm() {
    document.getElementById('eventForm').reset();
}

function deleteEvent(button) {
    const eventItem = button.parentElement.parentElement;
    eventItem.remove();
}

function editEvent(button) {
    const eventItem = button.parentElement.parentElement;
    const [name, date, duration] = eventItem.firstChild.textContent.split(' - ');

    document.getElementById('eventName').value = name.trim();
    document.getElementById('eventDate').value = date.trim();
    document.getElementById('eventDuration').value = parseInt(duration.trim());

    eventItem.remove();
}

// Funcionalidad del calendario
const calendarContainer = document.getElementById('calendar');
const daysInMonth = 30;

for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    dayElement.textContent = i;
    calendarContainer.appendChild(dayElement);
}
// Código para guardar un evento en localStorage
const nuevoEvento = "Nuevo evento"; // Aquí se debe obtener el evento creado por el usuario
const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
eventos.push(nuevoEvento);
localStorage.setItem('eventos', JSON.stringify(eventos));


   
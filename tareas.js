document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.querySelector('.todo-list');
    const filterOption = document.querySelector('.filter-todo');

    todoForm.addEventListener('submit', addTodo);
    todoList.addEventListener('click', deleteCheck);
    filterOption.addEventListener('change', filterTodo);

    function addTodo(event) {
        event.preventDefault();

        const todoName = document.getElementById('todo-name').value;
        const todoDescription = document.getElementById('todo-description').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = `${todoName}: ${todoDescription} (Desde: ${startDate} Hasta: ${endDate})`;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check-circle"></i>';
        completeButton.classList.add('complete-btn');
        todoDiv.appendChild(completeButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);

        todoForm.reset();
    }

    function deleteCheck(e) {
        const item = e.target;

        if (item.classList[0] === 'trash-btn') {
            const todo = item.parentElement;
            todo.classList.add('slide');
            todo.addEventListener('transitionend', () => {
                todo.remove();
            });
        }

        if (item.classList[0] === 'complete-btn') {
            const todo = item.parentElement;
            todo.classList.toggle('completed');
        }
    }

    function filterTodo() {
        const todos = todoList.childNodes;
        todos.forEach(todo => {
            switch (filterOption.value) {
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                case 'incomplete':
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                case 'unfinished':
                    if (!todo.classList.contains('completed') && new Date(todo.querySelector('.todo-item').innerText.split(' Hasta: ')[1]) < new Date()) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            }
        });
    }
});
// Array para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
function addTask(name, description, startDate, endDate) {
    tasks.push({ name, description, startDate, endDate, completed: false });
}

// Función para mostrar las tareas en la lista
function displayTasks() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerText = `${task.name} - ${task.description}`;
        
        // Botón para marcar como completada
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.addEventListener('click', () => {
            task.completed = true;
            displayTasks();
            // Mover tarea a otra lista si está completada
            // Código para mover la tarea a una lista de tareas completadas
        });
        
        // Botón para eliminar la tarea
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            displayTasks();
            // Agregar la tarea eliminada a una lista de tareas eliminadas si es necesario
        });
        
        // Agregar botones a la tarea
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        
        todoList.appendChild(taskItem);
    });
}

// Evento al enviar el formulario de tarea
const todoForm = document.getElementById('todo-form');
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoName = document.getElementById('todo-name').value;
    const todoDescription = document.getElementById('todo-description').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    addTask(todoName, todoDescription, startDate, endDate);
    displayTasks();
});

document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.querySelector('.todo-list');
    const savedTasksList = document.querySelector('.saved-tasks-list');

    todoForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();
        const todoName = document.getElementById('todo-name').value;
        const todoDescription = document.getElementById('todo-description').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        const task = document.createElement('li');
        task.innerHTML = `
            <span>${todoName}</span>
            <span>${todoDescription}</span>
            <span>${startDate}</span>
            <span>${endDate}</span>
            <button class="complete-btn">
                <i class="fas fa-check"></i>
            </button>
            <button class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        `;
        todoList.appendChild(task);

        const savedTask = document.createElement('li');
        savedTask.innerHTML = `
            <span>${todoName}</span>
            <span>${todoDescription}</span>
            <span>${startDate}</span>
            <span>${endDate}</span>
        `;
        savedTasksList.appendChild(savedTask);

        // Agregar eventos a los botones de eliminar y completar
        const deleteBtn = task.querySelector('.delete-btn');
        const completeBtn = task.querySelector('.complete-btn');

        deleteBtn.addEventListener('click', () => {
            task.remove();
            savedTask.remove(); // Eliminar también de la lista de tareas guardadas
        });

        completeBtn.addEventListener('click', () => {
            // Puedes agregar tu lógica para marcar la tarea como completada aquí
            // Por ejemplo, puedes cambiar el estilo de la tarea completada
            task.classList.add('completed');
        });

        todoForm.reset();
    }
});
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    document.getElementById('date').textContent = formattedDate;
}

window.onload = () => {
    updateDate(); // Initial call to display the date immediately
};

// Código para guardar una tarea en localStorage
const nuevaTarea = "Nueva tarea"; // Aquí se debe obtener la tarea creada por el usuario
const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
tareas.push(nuevaTarea);
localStorage.setItem('tareas', JSON.stringify(tareas));

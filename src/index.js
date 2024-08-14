import { renderTasks } from "./ui";
import { addtask,deleteTask, updateTask } from "./task";

document.addEventListener("DOMContentLoaded", () => {
    //Hacemos visible la lista de tareas
    renderTasks();

    //Agregar el evento para la función para agregar tareas
    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput = document.getElementById("task-input");
        if (taskInput.value !== "") {
            // Agregamos la tarea
            addtask(taskInput.value);

            // Volvemos a cargar la lista de tareas
            renderTasks();

            //Limpiar el input
            document.getElementById("task-input").value = "";
        }
    });

    // Agregar el eventp ára los botones
    document.getElementById("task-list").addEventListener("click", (e) => {
        if(e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement. getAttribute("data-id");
            deleteTask(taskId);
            renderTasks();
        }

        if(e.target.classList.contains("toggle")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            updateTask(taskId);
            renderTasks();
        }
    });
});
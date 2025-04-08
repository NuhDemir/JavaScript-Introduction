let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Listeyi temizle
  tasks.forEach((task, index) => {
    let listItem = document.createElement("li");
    listItem.className = `list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2 rounded-3 ${
      task.completed ? "bg-success text-white" : "bg-light"
    }`;
    listItem.innerHTML = `
      <span class="task-text ${
        task.completed ? "text-decoration-line-through" : ""
      }">
        ${task.text}
      </span>
      <div>
        <button class="btn btn-success btn-sm me-2" onclick="toggleTask(${index})" title="Mark as completed">
          <i class="bi bi-check-circle-fill">success</i>
        </button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})" title="Delete task">
          <i class="bi bi-trash-fill">wait</i>
        </button>
      </div>
    `;
    taskList.appendChild(listItem);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Güncellenen listeyi kaydet
}

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  tasks.push({ text: taskText, completed: false }); // Diziye ekle
  taskInput.value = ""; // Girdiyi temizle
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed; // Durumu değiştir
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1); // Diziden sil
  renderTasks();
}

renderTasks(); // Sayfa açıldığında görevleri yükle

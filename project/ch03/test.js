document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("task-list");
    const addTaskBtn = document.getElementById("add-task-btn");
    const newTaskInput = document.getElementById("new-task");

    // Yeni görev ekle
    addTaskBtn.addEventListener("click", addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.className = "task list-group-item d-flex justify-content-between align-items-center";
            listItem.innerText = taskText;

            // Görev sil butonu
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "btn btn-danger btn-sm";
            deleteBtn.innerText = "Delete";
            deleteBtn.addEventListener("click", () => {
                taskList.removeChild(listItem);
            });

            // Tamamlandı butonu
            const completeBtn = document.createElement("button");
            completeBtn.className = "btn btn-success btn-sm";
            completeBtn.innerText = "Completed";
            completeBtn.addEventListener("click", () => {
                listItem.classList.toggle("completed");
            });

            listItem.appendChild(deleteBtn);
            listItem.appendChild(completeBtn);
            taskList.appendChild(listItem);

            // Input alanını temizle
            newTaskInput.value = "";
        }
    }

    // Enter tuşuna basıldığında görev ekle
    newTaskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

// ประกาศตัวแปรที่เกี่ยวข้องกับ HTML elements
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

// ประกาศตัวแปร todos เพื่อเก็บรายการ Todo
let todos = [];

// ฟังก์ชันที่ใช้ในการลบ Todo ตาม index
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodoList();
}

// ฟังก์ชันที่ใช้ในการสลับสถานะ "completed" ของ Todo ตาม index
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  renderTodoList();
}

// ฟังก์ชันที่ใช้ในการเพิ่ม Todo
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todoItem = {
      text: todoText,
      completed: false,
    };
    todos.push(todoItem);
    renderTodoList();
    todoInput.value = "";
  }
}

// ฟังก์ชันที่ใช้ในการแสดงรายการ Todo ทั้งหมด
function renderTodoList() {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = todos[i].text;

    if (todos[i].completed) {
      listItem.classList.add("completed");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ลบ";
    deleteButton.addEventListener("click", () => deleteTodo(i));

    const completeButton = document.createElement("button");
    completeButton.textContent = todos[i].completed ? "ยกเลิก" : "เสร็จ";
    completeButton.addEventListener("click", () => toggleComplete(i));

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  }
}

// ตั้งค่า event listener สำหรับปุ่ม "เพิ่ม" และการกด Enter ใน input
addButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// เรียกใช้ฟังก์ชัน renderTodoList เพื่อแสดงรายการ Todo ที่มีอยู่แล้วทันทีเมื่อหน้าเว็บโหลด
renderTodoList();

// ประกาศตัวแปรและฟังก์ชัน
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
let todos = [];

// ฟังก์ชันเพิ่มรายการ Todo
function addTodo() {
  // ตรวจสอบว่ารายการ Todo ไม่ว่างเปล่า
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    // สร้างออบเจ็กต์ Todo
    const todoItem = {
      text: todoText,
      completed: false,
    };

    // เพิ่มออบเจ็กต์ Todo ลงในอาร์เรย์
    todos.push(todoItem);

    // แสดงรายการ Todo บนหน้าเว็บ
    renderTodoList();

    // ล้างค่า input
    todoInput.value = "";
  }
}

// ฟังก์ชันลบรายการ Todo
function deleteTodo(index) {
  // ลบออบเจ็กต์ Todo จากอาร์เรย์
  todos.splice(index, 1);

  // แสดงรายการ Todo บนหน้าเว็บ
  renderTodoList();
}

// ฟังก์ชันตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
function toggleComplete(index) {
  // เปลี่ยนสถานะการเสร็จสิ้นของรายการ Todo
  todos[index].completed = !todos[index].completed;

  // แสดงรายการ Todo บนหน้าเว็บ
  renderTodoList();
}

// ฟังก์ชันแสดงรายการ Todo บนหน้าเว็บ
function renderTodoList() {
  // ล้างเนื้อหาของรายการ Todo
  todoList.innerHTML = "";

  // วนซ้ำรายการ Todo
  for (let i = 0; i < todos.length; i++) {
    // สร้างรายการ Todo
    const listItem = document.createElement("li");
    listItem.textContent = todos[i].text;

    // เพิ่มคลาส "completed" หากรายการ Todo เสร็จสิ้น
    if (todos[i].completed) {
      listItem.classList.add("completed");
    }

    // สร้างปุ่มลบ
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ลบ";
    deleteButton.addEventListener("click", () => deleteTodo(i));

    // สร้างปุ่มเสร็จสิ้น/ยกเลิก
    const completeButton = document.createElement("button");
    completeButton.textContent = todos[i].completed ? "ยกเลิก" : "เสร็จ";
    completeButton.addEventListener("click", () => toggleComplete(i));

    // เพิ่มปุ่มลงในรายการ Todo
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    // เพิ่มรายการ Todo ลงในรายการ Todo
    todoList.appendChild(listItem);
  }
}

// การกดปุ่ม "เพิ่ม"
addButton.addEventListener("click", addTodo);

// การกด Enter ใน input
todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// แสดงรายการ Todo ครั้งแรก
renderTodoList();
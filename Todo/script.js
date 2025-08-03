  const input = document.querySelector("#search");
    const todoContainer = document.querySelector(".todo");
    const showTask = document.querySelector(".showTodo");
    const showDeleted = document.querySelector(".showDeleted");
    const deletedList = document.getElementById("deletedList");

    const todoArr = [];
    const deletedArr = [];

    document.querySelector(".addBtn").addEventListener("click", () => {
      const task = input.value.trim();
      if (task !== "") {
        todoArr.push(task);
        input.value = "";
        renderTodos();
      }
    });

    function renderTodos() {
      todoContainer.innerHTML = todoArr
        .map((item, index) => `
          <div class="flex justify-center">
            <ol class="w-[80%]">
              <li class="flex items-center justify-between gap-4 bg-white px-4 py-2 rounded-xl shadow">
                <p class="flex-1 font-bold break-words">${item}</p>
                <button class="delBtn bg-red-700 text-white px-4 py-1 rounded-2xl" data-index="${index}">del</button>
              </li>
            </ol>
          </div>
        `).join("");

      document.querySelectorAll(".delBtn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const index = e.target.getAttribute("data-index");
          const deletedTask = todoArr.splice(index, 1)[0];
          deletedArr.push(deletedTask);
          renderTodos();
          renderDeleted();
        });
      });
    }

    function renderDeleted() {
      deletedList.innerHTML = deletedArr
        .map((task) => `<li>${task}</li>`)
        .join("");
    }

    document.getElementById("showTodos").addEventListener("click", () => {
      showTask.classList.remove("hidden");
      showDeleted.classList.add("hidden");
    });

    document.getElementById("showDeleted").addEventListener("click", () => {
      showTask.classList.add("hidden");
      showDeleted.classList.remove("hidden");
    });
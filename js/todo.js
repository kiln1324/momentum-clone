const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = []; //저장하고 로드하기 위한 배열

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement; //클릭한 버튼을 가지고 있는 li를 선택
  const lih = li.style.height;
  li.animate(
    {
      height: [lih, 0],
      opacity: [1, 0],
    },
    500
  );
  setTimeout(function () {
    li.remove();
  }, 500);
  //li.remove(); //지움
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; // 새로 만든 li에 id값 추가

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "Ⅹ";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
  li.animate(
    {
      opacity: [0, 1],
    },
    500
  );
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // input에 입력된 값을 변수에 저장
  toDoInput.value = ""; // input을 비움
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  }; // input에 입력된 값과 입력된 시간으로 Object 생성
  toDos.push(newToDoObj); // array toDos에 새 todo(Object)를 추가
  paintToDo(newToDoObj); //생성된 Object로 함수실행
  saveToDos(); // 입력된 todo를 localStorage에 저장하는 함수실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const sevedToDos = localStorage.getItem(TODOS_KEY);
//로컬데이터베이스에서 key:todos를 불러와 변수에 저장

if (sevedToDos) {
  //변수에 저장된 값이 비어있지 않으면 실행
  const parsedToDos = JSON.parse(sevedToDos); //로컬에 저장된 투두리스트를 array 형태로 반환
  toDos = parsedToDos; //데이터베이스에서 불러온 배열값들을 toDos배열에 저장
  parsedToDos.forEach(paintToDo); //저장된 배열의 각값을 사용해 함수 실행
}

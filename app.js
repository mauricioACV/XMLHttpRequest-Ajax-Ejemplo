console.clear();

function ajaxExample(url) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      renderData(this.responseText);
    } else if (this.status === 404) {
      console.log("Error 404 al cargar recurso");
    }
  };
}

function renderData(data) {
  const divApp = document.querySelector("#app");
  const dataParse = JSON.parse(data);

  dataParse.forEach((item) => {
    const p_title = document.createElement("p");
    const p_completed = document.createElement("p");
    p_title.textContent = "Tarea: " + item.title;
    p_completed.textContent = "Completada: " + item.completed;
    divApp.appendChild(p_title);
    divApp.appendChild(p_completed);
  });
}

const url = "https://jsonplaceholder.typicode.com/todos";
ajaxExample(url);

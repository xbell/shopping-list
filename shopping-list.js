window.onload = function () {
  var list = document.getElementById("list");
  var item = document.getElementById("item");
  var add = document.getElementById("add");
  var ul = document.createElement("ul");

  list.appendChild(ul);
  
  add.addEventListener("click", function () {
    event.preventDefault();
    // set up list element which contains text, complete btn, delete btn
    var listElement = document.createElement("li");

    // set up text element
    var text = document.createElement("p");
    var value = item.value;
    text.innerHTML = value;
    listElement.appendChild(text);

    // set up complete button
    var completed = document.createElement("button");
    completed.innerHTML = "Completed";
    completed.addEventListener("click", function () {
      event.preventDefault();
      console.log("completed");
      if (this.innerHTML === "Completed") {
        ul.removeChild(listElement);
        ul.appendChild(listElement);
        text.style.color = "gray";
        text.innerHTML = value.strike();
        this.innerHTML = "Incomplete";
      } else {
        ul.insertBefore(listElement, ul.firstChild);
        text.style.color = "black";
        text.innerHTML = value;
        this.innerHTML = "Completed";
      }
    });
    listElement.appendChild(completed);

    // set up delete button
    var erase = document.createElement("button");
    erase.innerHTML = "X";
    erase.addEventListener("click", function () {
      event.preventDefault();
      console.log("delete");
      if (erase.innerHTML === "Delete") {
        ul.removeChild(listElement);
      } else {
        erase.innerHTML = "Delete";
      }
    });
    listElement.appendChild(erase);

    ul.insertBefore(listElement, ul.firstChild);

    item.value = "";
  });
};

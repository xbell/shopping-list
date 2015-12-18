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
    if (value.length !== 0) {
      text.innerHTML = value;
      listElement.appendChild(text);

      // set up complete button
      var completed = document.createElement("button");
      completed.innerHTML = "✓";
      completed.id = "completed";
      completed.addEventListener("click", function () {
        event.preventDefault();
        console.log("completed");
        if (this.innerHTML === "✓") {
          ul.removeChild(listElement);
          ul.appendChild(listElement);
          text.style.color = "rgb(26, 237, 155)";
          text.style.backgroundColor = "rgba(42, 37, 40, 0.48)";
          text.innerHTML = value.strike();
          this.innerHTML = "Incomplete";
        } else {
          ul.insertBefore(listElement, ul.firstChild);
          text.style.color = "rgba(1, 11, 13, 0.82)";
          text.style.backgroundColor = "rgba(26, 237, 155, .7)";
          text.innerHTML = value;
          this.innerHTML = "✓";
        }
      });
      listElement.appendChild(completed);

      // set up delete button
      var erase = document.createElement("button");
      erase.innerHTML = "✘";
      erase.value = "✘";
      erase.style.color = "rgb(240, 56, 46)";
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
    } else {
      // ask for input
    }

  });
};

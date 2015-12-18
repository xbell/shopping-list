window.onload = function () {
  var list = document.getElementById("list");
  var item = document.getElementById("item");
  var add = document.getElementById("add");
  var ul = document.createElement("ul");



  // function add() {
      // var completed = document.createElement("button");
      // completed.setAttribute("value", "Completed");
      // element.setAttribute("name", "button3");
      // element.setAttribute("onclick", "foo()");
      // document.flotta.appendChild(element);
  // }

  // var turnGray = function () {
  //   this.style.color = "gray";
  // }

  add.addEventListener("click", function () {
    event.preventDefault();
    var listElement = document.createElement("li");
    listElement.innerHTML = item.value;
    // set up complete button
    var completed = document.createElement("button");
    completed.innerHTML = "Completed";
    completed.addEventListener("click", function () {
      event.preventDefault();
      console.log("completed");
      ul.removeChild(listElement);
      ul.appendChild(listElement);
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

    list.appendChild(ul);
    ul.appendChild(listElement);
    item.value = "";

    // listElement.document.getElement
    // listElement.addEventListener("click", turnGray)

    // listElement.addEventListener("click", function () {
    //   this.parentNode.removeChild(this);
    // });


  });



};

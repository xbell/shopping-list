// var listArr = function (item) {
//   var newListArr = []
//   newListArr.push(item);
// }



window.onload = function () {
  var list = document.getElementById("list");
  var item = document.getElementById("item");
  var addedItem = document.getElementById("added-item");

  var li;
  // item = list.item.value;

  // var turnGray = function () {
  //   this.style.color = "gray";
  // }

  list.addEventListener("submit", function (event) {
    event.preventDefault();
    unorderedListElement = document.createElement("ul")
    listElement = document.createElement("li");
    listElement.innerHTML = item.value;
    // unorderedListElement.innerHTML = listElement
    list.appendChild(unorderedListElement);
    unorderedListElement.appendChild(listElement)
    // list.innerHTML = "";
    // listElement.addEventListener("click", turnGray)

    listElement.addEventListener("click", function () {
      this.parentNode.removeChild(this);
    });


  });



}

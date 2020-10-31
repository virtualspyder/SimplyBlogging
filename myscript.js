// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementById("l2");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("delete \u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    li.classList.add("list-group-item");

    var inputValue = document.getElementById("myTitle").value;
    var inputValue2 = document.getElementById("myText").value;

    var t = document.createTextNode(inputValue);
    var t2 = document.createTextNode(inputValue2);


    ul.appendChild(li).className;
    li.appendChild(h2).className;
    li.appendChild(p).className;
    h2.appendChild(t).className;
    p.appendChild(t2).className;
    
    if (inputValue === '' || inputValue2 === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(h2)
        document.getElementById("myUL").appendChild(p);
        
        document.getElementById("myUL").value = "";
    }

    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("delete \u00D7");
    // span.className = "close";
    // span.appendChild(txt);
    // myNodelist[i].appendChild(span);

    // for (i = 0; i < close.length; i++) {
    //     close[i].onclick = function () {
    //         var div = this.parentElement;
    //         div.style.display = "none";
    //     }
    // }
}

// //Clearing the list
// function removeAll() {
//     var lst = document.getElementsByClassName("card");
//     for (i = 0; i < lst.length; i++) {
//         lst[i].style.display = 'none';
//     }
// }







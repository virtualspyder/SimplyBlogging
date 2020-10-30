function newTodo () {


    var inputValue  = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    var li = document.createElement('li');
    var p = document.createElement('p');
    var h2 = document.createElement('h2');

    h2.appendChild(text);
    li.appendChild(h2);

    p.appendChild(text);
    li.appendChild(p);

    if(inputValue === ''){
        alert('You must write something')
    } else {
        document.getElementById('myList').appendChild(h2).appendChild(li);
        document.getElementById('myList').appendChild(li);
        document.getElementById('myInput').value = '';
    }

    var span = document.createElement('span');
    var text = document.createTextNode(" \u00D7");
    var card = document.createElement('card')
    span.appendChild(text);
    span.className = "close";
    list[i].appendChild(span);

    for(i=0; i<close.length;i++){
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'None';
        } 
    }



    // document.getElementById("myList").appendChild(li);

}

function removeAll() {
    var list = document.getElementsByTagName('ul')
    list[0].innerHTML = '';
}

/** 
 * Create close button for each item in list
 */
var list = document.getElementsByTagName('li');
var i;
for(i=0; i<list.length; i++){
    var span = document.createElement('span');
    var text = document.createTextNode(" \u00D7");
    span.appendChild(text);
    span.className = "close";
    list[i].appendChild(span);
}

//Click close to hide current list item
var close = document.getElementsByClassName('close');
var i;
for(i=0; i<close.length;i++){
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'None';
    } 
}






http://127.0.0.1:5500/blog.html





function removeAll() {
    var list = document.getElementsByTagName('li')
    var h2 = document.getElementsByTagName('h2');
    var p = document.getElementsByTagName('p');

    for(inti=0;i<list.length;i++){
        h2[i].innerHTML = '';
        p[i].innerHTML = '';
    }
}









<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="./mystyle.css">
  <!-- <script src="./myscript.js"></script> -->
  <!-- <script type="text/javascript" src="myscript.js"></script> -->


  <title>Document</title>
</head>
<body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse justify-content-md-center" id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="blog.html">Blog <span class="sr-only">(current)</span></a>
          <a class="nav-link" href="blog-2.html">Blog <span class="sr-only">(current)</span></a>

        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <header class="masthead text-center text-white">
    <div class="masthead-content">
      <div class="container">
        <h1 class="masthead-heading mb-0">Blogs</h1>
      </div>
    </div>
  </header>

  <div class="container mt-5">
    <h2 style="margin:5px"></h2>
        <input type="text" id="myInput" placeholder="Title...">
        <span onclick="newElement()" class="addBtn">Add</span>
  </div>

  <ul id="myList" class="container mt-5 ">
    <li>Call to Rohit</li>
    <li class="checked">Align Meeting with Yuvraj</li>
    <li>Send Proposal to TCS</li>
    <li class="checked">Prepare JS Activity</li>
    <li>Take Some Rest</li>
  </ul>

    <!-- <div class="row main-section col-sm-12 col-md-9 col-lg-9">
  
            <ul id="myList">
              <li class="card" >
                <h2 class="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta nisi ab consequatur fugit obcaecati harum expedita, doloremque dolorem quam aut quas ad amet assumenda. Provident sunt ipsum minima autem.</p>
              </li>
            </ul>
            <li class="card" >
              <h2 class="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta nisi ab consequatur fugit obcaecati harum expedita, doloremque dolorem quam aut quas ad amet assumenda. Provident sunt ipsum minima autem.</p>
            </li>
          </ul>
            <ul>
              
            </ul> -->


        <button type="button" id="clear-list" onclick="removeAll()">Clear Items</button>
        <script type="text/javascript" src="newTodo.js"></script>
</div>


<!-- main content ends -->
<div class="footer-section mt-5">
    <p class="text-center m-0 text-white">2020 © Copyright by Hamza Sheikh</p>
</div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<!-- <script type="text/javascript" src="myscript.js"></script> -->

  
  
</body>
</html>




<!-- 

<div class="row main-section">
  <div class="col-sm-12 col-md-9 col-lg-9">
      <div class="card rounded-0 shadow-sm" >
          <div class="card-header">
              <span>By</span>
              <span class="text-success"> Hamza Sheikh</span>
              <span>On</span>
              <span class="text-success"> 28 Oct 2020</span>
          </div>
          <div class="card-body">
            <img class="card-img-top" src="https://via.placeholder.com/750x300" alt="bootstrap simple blog">
            <hr>
              <h2 class="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta nisi ab consequatur fugit obcaecati harum expedita, doloremque dolorem quam aut quas ad amet assumenda. Provident sunt ipsum minima autem.</p>
              <a href="blog-post.html" class="btn btn-primary">Read more</a>
          </div>
      </div>

  </div> --></div>
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

<body>

    <div class="header">
        <h2 style="margin:5px">To Do List</h2>
        <input type="text" id="myInput" placeholder="Title...">
        <span onclick="newElement()" class="addBtn">Add</span>
    </div>

    <ul id="myUL">
        <li>Call to Rohit</li>
        <li class="checked">Align Meeting with Yuvraj</li>
        <li>Send Proposal to TCS</li>
        <li class="checked">Prepare JS Activity</li>
        <li>Take Some Rest</li>
    </ul>
    <button type="button" id="clear-list" onclick="removeAll()">Clear Items</button>

    <script type="text/javascript" src="newTodo.js"></script>

</body>

</html>









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






document.querySelectorAll('.main img').forEach(Image =>{
    Image.onclick = () =>{
        document.querySelector('.popupimg').style.display = 'block';
        document.querySelector('.popupimg img').src = Image.getAttribute('src');
    }
});

var cbtn=document.getElementById('#closebtn');

closebtn.onclick=function(){
    document.querySelector('.popupimg').style.display = 'none';
};


function myFunction() {
    var x = document.getElementById("search");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  function addFunction() {
    var x = document.getElementById("addphoto");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  function userFunction() {
    var x = document.getElementById("user");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
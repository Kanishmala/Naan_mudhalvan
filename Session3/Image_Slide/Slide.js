var i = 0;
var con = document.getElementById("container");
const miniImg = document.getElementsByClassName("myimg");
console.log(miniImg);

var img = [
  "https://th.bing.com/th/id/OIP.CjQ5JC6KbqFuhlazNypJcAHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.aL9ap7kxo02xpexoOhRcEAHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.VfqJFJtm2O47nxIJtDcuBAHaFA?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.-4Jg0bXw6kXwlFi4wWOSiAHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
];

function next() {
  miniImg[i].classList.remove("active");

  i++;
  if (i == img.length) {
    i = 0;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = 'url("' + img[i] + '")';
  con.style.transitionDuration("1s");
}

function previous() {
  miniImg[i].classList.remove("active");
  i--;
  if (i < 0) {
    i = img.length - 1;
  }
  con.style.backgroundImage = 'url("' + img[i] + '")';
  miniImg[i].classList.add("active");
  con.style.transitionDuration("1s");
}

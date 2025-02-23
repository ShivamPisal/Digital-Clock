//first here i am getting id and storing in the reference variable
const hourE1 = document.getElementById("hours");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

// here i am creating a function for update information in the clock
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  // i use this condition for checking am or pm
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  // condition to add the 0 before the numbers less than 10 so that it look beautiful
  // for hours
  if (h < 10) {
    h = "0" + h;
  }

  //for Minute 👇
  if (m < 10) {
    m = "0" + m;
  }

  //for Seconds 👇
  if (s < 10) {
    s = "0" + s;
  }

  // here i am updating data using inner text
  hourE1.innerText = h;
  minuteE1.innerText = m;
  secondE1.innerText = s;
  ampmE1.innerText = ampm;

  // to update time for every 1 second here i am adding infinite loop which calls function after every second
  setTimeout(() => {
    updateClock();
  });
}

// to call the function for first time this call function is used And this is important without this program not working

updateClock();

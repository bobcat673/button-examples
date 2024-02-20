window.onload = function() {
  document.getElementById("info-form").onsubmit = function(event) {
    event.preventDefault();
    const color = document.querySelector("input[name='color']:checked").value;
    const name = document.getElementById("Input1").value;
    document.querySelector("h1").innerText = "You are " + color + " " + name
    if (color === "Green") {
      document.querySelector("p").innerText = "Gross like puke"
    }
    else if (color === "Black") {
      document.querySelector("p").innerText = "Black as night"
    }
    else if (color === "White") {
      document.querySelector("p").innerText = "White is a color"
    }
  };
};
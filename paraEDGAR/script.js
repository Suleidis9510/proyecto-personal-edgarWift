document.addEventListener("DOMContentLoaded", function() {
  const ratoncito = document.getElementById("ratoncito");
  const question = document.getElementById("question");
  const buttons = document.getElementById("buttons");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");

  ratoncito.addEventListener("click", function() {
    question.classList.remove("hidden");
    buttons.classList.remove("hidden");
  });

  btn1.addEventListener("click", function() {
    growButton(btn2);
  });

  function growButton(button) {
    const currentFontSize = parseInt(window.getComputedStyle(button).fontSize);
    const currentPadding = parseInt(window.getComputedStyle(button).padding);

    button.style.fontSize = (currentFontSize + 4) + 'px';
    button.style.padding = (currentPadding + 4) + 'px';
  }
});
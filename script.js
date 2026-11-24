const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", () => {
  message.textContent = "読んでくれてありがとうございます。あなたの毎日にも素敵な物語がありますように。";
  messageButton.textContent = "ありがとうございます！";
});

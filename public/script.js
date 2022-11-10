var socket = io("http://192.168.100.125:5000", {});
// socket.on("connect", function () {});
// socket.on("event", function (data) {});
// socket.on("disconnect", function () {});
var message = document.querySelector("#message");
var username = document.querySelector("#username");
var send_message = document.querySelector("#send_message");
var send_username = document.querySelector("#send_username");
var chatroom = document.querySelector("#chatroom");

/****************Change User Name*********************/
send_username.addEventListener("click", () => {
  console.log(username.value);
  socket.emit("change_username", { username: username.value });
});

/****************Send a message*********************/
send_message.addEventListener("click", () => {
  console.log(message.value);
  socket.emit("new_message", { message: message.value });
});

/****************Publish a message*********************/
socket.on("new_message", (data) => {
  console.log(data);
  chatroom.insertAdjacentHTML(
    "beforeend",
    `<p class='message'>${data.username}: ${data.message} </p>`
  );
});

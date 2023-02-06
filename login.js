"use strict";

const uNameInput = document.getElementById("input-username");
const passWordInput = document.getElementById("input-password");
const loginBtn = document.getElementById("btn-submit");

const KEY = "USER-ARRAY";
const userArr = JSON.parse(getFromStorage(KEY)) || [];
const KEY2 = "CR-USER";
const currentUser = JSON.parse(getFromStorage(KEY2)) || [];

// Kiểm  tra Validate
function validate(data) {
  // Check không trường nào bị bỏ trống
  if (data.userName === "" && data.password === "") {
    alert("Vui lòng nhập thông tin !");
    return false;
  }
  if (data.userName === "") {
    alert("Vui lòng nhập username");
    return false;
  }
  if (data.password === "") {
    alert("Vui lòng nhập password ");
    return false;
  }
  // Kiểm tra độ dài của password 8 ký tự
  if (passWordInput.value.length <= 8) {
    alert("Vui lòng nhập Password trên 8 ký tự");
    return false;
  }
  return true;
}

function checkLogin(data) {
  for (let user of userArr) {
    if (user.userName === data.userName && user.passWord === data.password) {
      currentUser.push(user);
      saveToStorage(KEY2, JSON.stringify(currentUser));
      window.location.href = "../index.html";
      return true;
    }
  }
  return false;
}
//thêm sự kiện vào nút logoin
loginBtn.addEventListener("click", function () {
  const data = {
    userName: uNameInput.value,
    password: passWordInput.value,
  };
  console.log(data);
  // biến kiểm tra dữ liệu Validate
  const check = validate(data);
  const checkLg = checkLogin(data);
  if (check) {
    // Kiểm tra loggin thành công hay chưa !!!
    if (checkLg) {
      alert("Đăng nhập thành công !");
    } else {
      alert(`Vui lòng kiểm tra lại user hoặc password`);
    }
  }
});

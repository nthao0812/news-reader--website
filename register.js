"use strict";

const fNameInput = document.getElementById("input-firstname");
const lNameInput = document.getElementById("input-lastname");
const uNameInput = document.getElementById("input-username");
const passWordInput = document.getElementById("input-password");
const cfPassWordInput = document.getElementById("input-password-confirm");
const registerBtn = document.getElementById("btn-submit");

///tạo class User 
class User {
  constructor(firstName, lastName, userName, passWord) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.passWord = passWord;
  }
  API = {
    category: "",
    pageSize: "",
  };
}
//////storage 
const KEY = "USER-ARRAY";
const userArr = JSON.parse(getFromStorage(KEY)) || [];

// Chuyển JS object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.userName,
    userData.password
  );

  return user;
}

// Kiểm tra Validate
function validate(data) {
  // Check không trường nào bị bỏ trống
  if (
    data.firstName === "" &&
    data.lastName === "" &&
    data.userName === "" &&
    data.password === "" &&
    cfPassWordInput.value === ""
  ) {

    //nhập thông tin 
    alert("Vui lòng nhập thông tin ");
    return false;
  }
  if (data.firstName === "") {
    alert("Vui lòng nhập frist name ! ");
    return false;
  }
  if (data.lastName === "") {
    alert("Vui lòng nhập last name !");
    return false;
  }
  if (data.userName === "") {
    alert("Vui lòng nhập user name !");
    return false;
  }
  if (data.password === "") {
    alert("Vui lòng nhập password !");
    return false;
  }
  if (cfPassWordInput.value === "") {
    alert("Vui lòng Confrim password");
    return false;
  }

  // Check userName không đƯợc trùng nhau !
  for (let i = 0; i < userArr.length; i++) {
    if (data.userName == userArr[i].userName) {
      alert("Vui lòng không nhập trùng ID");
      return false;
    }
  }
  // Kiểm tra password và confirm giống nhau

  if (cfPassWordInput.value !== data.password) {
    alert("Vui lòng nhập chính xác Password !");
    return false;
  }

  // Kiểm tra độ dài của password 9 ký tự
  if (passWordInput.value.length <= 8) {
    alert("Vui lòng nhập Password trên 8 ký tự");
    return false;
  }
  return true;
}

// Xóa dữ liệu vừa nhập trên form
function clearInput() {
  fNameInput.value = "";
  lNameInput.value = "";
  uNameInput.value = "";
  passWordInput.value = "";
  cfPassWordInput.value = "";
}

// Bắt sự kiện khi ấn vào Register đăng ký
registerBtn.addEventListener("click", function () {
  const data = {
    firstName: fNameInput.value,
    lastName: lNameInput.value,
    userName: uNameInput.value,
    password: passWordInput.value,
  };
  // biến kiểm tra dữ liệu Validatte
  const check = validate(data);
  const user = parseUser(data);

  if (check) {
    alert("Đăng ký thành công ! ");
    window.location.href = "../pages/login.html";
    userArr.push(user);
    saveToStorage(KEY, JSON.stringify(userArr));
    clearInput();
  }
});

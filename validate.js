"use strict";
//Hàm valid thong tin đăng ký của người dùng
function validate(user) {
  let isValidate = true;

  //không bỏ trống user
  if (user.fistname.trim().length === 0) {
    alert("Vui lòng nhập Frist Name");
    isValidate = false;
  }

  if (user.lastname.trim().length === 0) {
    alert("Vui lòng nhập Last Name");
    isValidate = false;
  }
  //password
  if (user.password === "") {
    alert("Vui lòng nhập password !");
    isValidate = false;
  }

  //confirm password
  if (inputPasswordconfirm.value === "") {
    alert("Vui lòng nhập Confirm password !");
    isValidate = false;
  }

  // user name khôg được trùng lặp
  if (
    !userArr.every((item) => (item.username !== user.username ? true : flase))
  ) {
    alert("User name đã tồn tại !");
    isValidate = false;
  }

  //Password va cofirm password phải giống nhau
  if (user.password !== inputPasswordconfirm.value) {
    alert("Password và confirm password phải giống nhau");
    isValidate = false;
  }
  // pasword phải có nhiều hơn 8 ký tự
  if (user.password.length <= 0) {
    alert("Password phải có nhiều hơn 8 ký tự !");
    isValidate = false;
  }
  return isValidate;
}

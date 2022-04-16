window.onload = function () {
  document.forms[0].onsubmit = function () {
    if (this.checkValidity()) alert("Successful!");
    return false;
  };
};

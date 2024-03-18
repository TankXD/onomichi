const contactForm = document.querySelector(".js-contact-form");
const contactInputs = Array.from(
  document.querySelectorAll(".js-contact-input")
);
const contactSubmitBtn = document.querySelector(".js-contact-submit");

function handleSuccess() {
  alert("Form submitted successfully!");
}

function checkValidity(input) {
  if (!input.checkValidity()) {
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
  }
}

contactInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    checkValidity(e.target);
  });
});
// input값이 변경될 때마다 유효성 검사

contactSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactInputs.forEach((input) => {
    checkValidity(input);
  });
});
//form 제출 시 input의 유효성 검사
//form자체를 submit하는 경우에 유효성검사를 하려고하면 적용이 안됨.
//대신에 아예 form을 submit하는 버튼을 클릭한 경우에 유효성검사를 하도록함.

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  handleSuccess();
});
// form 제출 시 alert 창 띄우기

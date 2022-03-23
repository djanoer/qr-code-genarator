const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; // if the input is empty then return from here
    // getting a QR code of user entered value using the qrserver
    // API and passing the API returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    wrapper.classList.add("active");
})
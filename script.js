const generate = document.getElementById("generate");
const urlText = document.getElementById("urlText");
const qrCodeGoogle = document.getElementById("qrCodeGoogle");
const qrCodeGoQR = document.getElementById("qrCodeGoQR");

generate.addEventListener("click", e => {
    e.preventDefault();
    let url = urlText.value;
    console.log(url);
    let qrUrlGoogle = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${url}&choe=UTF-8`
    qrCodeGoogle.setAttribute("src", qrUrlGoogle);
    let qrUrlGoQR = ` https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url}`
    qrCodeGoQR.setAttribute("src", qrUrlGoQR);
})

urlText.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        generate.click();
    }
})
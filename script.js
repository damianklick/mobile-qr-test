const generate = document.getElementById("generate");
const urlText = document.getElementById("urlText");
const qrCode = document.getElementById("qrCode");

generate.addEventListener("click", e => {
    e.preventDefault();
    let url = urlText.value;
    console.log(url);
    let qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${url}&choe=UTF-8`
    qrCode.setAttribute("src", qrUrl);
})

urlText.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        generate.click();
    }
})
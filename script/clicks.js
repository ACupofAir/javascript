var i = 0
setInterval(() => {
    if(document.querySelector("#el-collapse-content-9906 > div > div > div > div > div:nth-child(5) > div > button.el-button.el-button--primary.el-button--mini.is-round > span").innerText === "选择") {
        document.querySelector("#el-collapse-content-9906 > div > div > div > div > div:nth-child(5) > div > button.el-button.el-button--primary.el-button--mini.is-round").click();
        document.querySelector("body > div.el-message-box__wrapper > div > div.el-message-box__btns > button.el-button.el-button--default.el-button--small.el-button--primary").click();
        i++;
    } else {
        console.log('win');
    }
}, 2000)
document.querySelector("#el-collapse-content-9906 > div > div > div > div > div:nth-child(5) > div > button.el-button.el-button--primary.el-button--mini.is-round > span")
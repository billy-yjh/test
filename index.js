const clickList = document.getElementsByTagName('li')
const userMsgList = document.getElementsByClassName('userMsg')
const len = clickList.length
for (let i = 0; i < len; i++) {
  clickList[i].onclick = function () {
    for (let j = 0; j < len; j++) {
      clickList[j].className = "";
      userMsgList[j].style.display = "none";
    }
    this.className = "active";
    userMsgList[i].style.display = "block";
  }

}
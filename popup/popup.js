const download = document.getElementById("download");

download.addEventListener("click", () => {
  var textBody = document.getElementById("body").value;
  var textTitle = document.getElementById("title").value;
  downloadFile(textTitle, textBody);
});

function downloadFile(textTitle, textBody) {
  var ele = document.createElement("a");
  ele.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(textBody)
  );
  ele.setAttribute("download", textTitle);
  document.body.appendChild(ele);
  ele.click();
  document.body.removeChild(ele);
}

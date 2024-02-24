<script>
function changeBackground() {
  var hour = new Date().getHours(); // 获取当前小时数(0-23)
  var body = document.body;

  if (hour >= 6 && hour < 18) {
    // 如果是早上6点到晚上6点，设置为白天的背景
    body.style.backgroundColor = "#add8e6";
  } else {
    // 如果是晚上6点到早上6点，设置为夜晚的背景
    body.style.backgroundColor = "#000033";
  }
}

// 当页面加载完毕时调用函数
window.onload = changeBackground;
</script>

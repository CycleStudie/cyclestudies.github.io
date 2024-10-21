// hide.js

function hideText(text) {
  // 获取所有元素
  var elements = document.getElementsByTagName('*');

  // 遍历所有元素
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // 检查元素的文本内容是否包含指定的文本
    if (element.textContent.includes(text)) {
      // 如果包含，则隐藏该元素
      element.style.display = 'none';
    }
  }
}

// 当 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  hideText("Powered by");
});

/**
 * 2023/11/16
 * 作者:小魔
 * 功能：点击任意位置，随机生成一个表情，并将其显示在屏幕上
 * 版本：1.0
 * 使用说明：直接在html标签上添加该脚本即可
 */

let $html = document.getElementsByTagName("html")[0];
// 表情列表，可进行跟换
let emoji_dict = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '☺', '😊', '😚', '😙', '😗', '😘', '😍', '😌', '😉', '🙃', '🙂', '😇', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😖', '😣', '☹', '🙁', '😕', '😟', '😔', '😞', '😒', '😏', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😥', '😢', '😨', '😱', '😳', '😵', '😲', '😮', '😦', '🤤', '😭', '😪', '😴', '🙄', '🤔', '😬', '🤥', '🤐', '💩', '👺', '👹', '👿', '😈', '🤕', '🤒', '😷', '🤧', '🤢', '👻', '💀', '☠', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '🙏', '👏', '🙌', '👐', '😾', '😿', '🙀', '😽', '😼', '😻', '❤']
/**
 * create_emoji函数用于创建一个带有随机表情的元素，并将其显示在屏幕上。  
 * 
 * @param {Event} e - 事件对象，用于获取触发事件的相关信息。  
 */  
let create_emoji = function (e) {
	
	// 获取随机emoji的函数
	let get_rand_emoji = function () {
		// 返回两个数之间的随机整数,返回的值将作为emoji下标
		function getRndInteger(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		// 返回一个emoji下标
		return emoji_dict[getRndInteger(0, emoji_dict.length - 1)]
	}

	let anim                                    // 动画计时器
	let increase = 0                                 // 动画位置控制

	// 设置基本样式
	let emoji = document.createElement("b")    // 创建一个元素
	emoji.style.color = "#E94F06"     // 设置颜色
	emoji.style.zIndex = 9999         // 设置置于顶层
	emoji.style.position = "fixed" // 设置屏幕绝对定位
	emoji.style.userSelect = "none"       // 设置不可选中
	 // 获取鼠标点击位置，并设置表情的位置  
	let x = e.clientX
	let y = e.clientY          // 获取位置
	emoji.style.left = (x - 10) + "px"
	emoji.style.top = (y - 15) + "px"    // 将位置摆到中间
	emoji.innerText = get_rand_emoji()                 // 获取随机表情
	// emoji.style.fontSize = Math.random() * 50 + 10 + "px"   
	emoji.style.fontSize = "50px"         // 大小
	console.log(emoji)

	clearInterval(anim)  // 清除计时器

	let $body = document.getElementsByTagName("body")[0]
	$body.appendChild(emoji)                   // 添加元素
	anim = setInterval(                    // 启动动画
		function () {
			if (++increase == 150) {
				clearInterval(anim)
				$body.removeChild(emoji)
			}
			// 移动元素
			emoji.style.top = (y - 15) - increase + "px";
			emoji.style.opacity = (150 - increase) / 120;
		},
		10
	);
};

(function () {
	let $html = document.getElementsByTagName("html")[0]
	$html.onclick = function (e) {
		create_emoji(e)
	}
})();
const date = document.getElementById('date');  
const currentText = document.getElementById('currentText');  
const currentDate = new Date(); // 获取当前时间    
const year = currentDate.getFullYear(); // 获取年份    
const month = currentDate.getMonth() + 1; // 获取月份（注意月份从0开始，需要加1）    
const day = currentDate.getDate(); // 获取日期    
date.textContent = `${year}年${month}月${day}日`;  
currentText.style.color = "#f96c0f";
/**
 * 防抖函数
 * @param {function} func 
 * @param {*} duration 
 */
function debounce(func,duration = 1000){
    
}

debounce(function(){
    
})
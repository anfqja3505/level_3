// animation02.js
// 1. 서브메뉴 초기 숨기기
// 2. 메인메뉴를 클릭(터치)하면 서브메뉴 보이기
// 변수 
const li = document.querySelector('.gnb > ul > li:nth-child(2)');
const snb = document.querySelector('.gnb .snb');

console.log(li, snb)

// 1. 서브 메뉴 숨기기
snb.style.display = 'none';

// 2. 메인메뉴를 클릭(터치) 하면 서브메뉴 보이기
li.addEventListener('click',snbShow)
function snbShow() {
    snb.style.display = 'flex';
}
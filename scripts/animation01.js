// animation01.js
// item에 마우스를 올리면 img태그 경로가 다른 이미지로 변경
const item1 = document.querySelector('.item')
const item1Img = document.querySelector('.item img')

//변수테스트
console.log(item1, item1Img)

//이벤트
item1.addEventListener('mouseover',item1ImgSrc);
item1.addEventListener('mouseout',item1ImgSrcOut);

//함수
function item1ImgSrc() {
    item1Img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44DWkfsPgUoY5trhxU1WbOvTQ68qvFQ_9jAZHpDqXfb2ERGMejiRUVAg&s=10'; 
}
function item1ImgSrcOut() {
    item1Img.src = 'https://i.namu.wiki/i/aoXEvwYjd408MQfYqtiIFQ5GqPB_QHGkF_AeTneTugXsd7veCXrnWCje1caonFsBoni_P0W6g8-CvpkTU-ERyw.webp'; 
}

const item2 = document.querySelector('.sale')
const item2Img = document.querySelector('.sale .photo img')

console.log(item2,item2Img)

item2.addEventListener('mouseover',item2ImgSrc)
item2.addEventListener('mouseout',item2ImgSrcOut)

function item2ImgSrc() {
    item2Img.src = 'https://image.msscdn.net/thumbnails/images/prd_img/20260415/6317950/detail_6317950_17764004905513_big.jpg?w=1200';
}
function item2ImgSrcOut() {
    item2Img.src = 'https://image.msscdn.net/thumbnails/images/goods_img/20260415/6317950/6317950_17764004707273_big.jpg?w=1200';
}

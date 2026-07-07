/* var.js */
// 한줄 주석
/* 여러줄 수석 */
//변수와 함수
//변수키워드 변수명 대입연산자 대입값;
//함수생성키워드 함수명(){실행결과;}
let user_name = '홍길동';
let user_pw = `1234`;
function func1(){ //생성과 준비
    console.log(user_name);
    console.log(user_pw);
}//함수 끝 위치
func1(); //함수호출

// 상황) 원하는 영화명(토이스토리)을 검색하면 검색하기 버튼을 누르면 영화명, 개봉일이 콘솔에 출력
// 반복실행 = 함수
const movie_name = '토이스토리';
const movie_date = '26.07.07';
function movie_search() {
    console.log(movie_name);
    console.log(movie_date);
}

// 목표) 노트북 검색하기 버튼을 클릭하면 삼성 노트북, 15인치 정보가 콘솔에 출력하기
// 변수, 함수명 참고) 노트북 모델명, 노트북 크기, 노트북 검색

const laptop_name = '맥북';
const laptop_size = '15인치';

function laptop_search() {
    console.log(laptop_name);
    console.log(laptop_size);
}

//목표) 여행검색하기 클릭 시 여행지/가격/특산물 정보 콘솔 출력
//강릉/20만원/감자빵

const trip_name = '강릉';
let trip_price = '200,000원';
let trip_food = '감자빵';

function trip_info() {
    console.log(trip_name);
    console.log(trip_price);
    console.log(trip_food);
}
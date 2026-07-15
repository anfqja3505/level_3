# 자바스크립트&제이쿼리
## 프로젝트 제작 시 항상 준비해야하는 파일, 폴더 순서
1. 프로젝트 **폴더명 영문으로 의미있게** 작성하기
2. `index.html`, `README.md` 생성
3. `styles`, `scripts`, `images` 폴더 생성
4. `styles/reset.css`, `styles/index.css` 생성
5. `scripts/index.js` 생성 
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹앱에서 사용하는 실제대상(버튼, 링크, 이미지 등), 보통 변수로 데이터(객체)를 저장해서 사용
* 이벤트 : 웹앱을 이용하는 사용자의 행동(클릭, 터치, 드래그 등)
    * `<button onclick="클릭 시 실행되는 함수">`
* 함수 : 2번 이상 반복되는 실행내용
    * 함수 생성과 호출을 각각 다르게 구분함.
    * 함수 생성 : `function 함수명() {함수 호출 시 반복실행할 내용;}` 생성만으론 절대 결과가 실행되지 않음. 반드시 호출 별도로 진행해야함.
    * 함수 호출 : 위 함수 생성 바깥 쪽에 `함수명()` 작성, 이벤트와 함께 사용하기도 함. `onclick="함수명();"`
### 변수(데이터(객체)를 저장하는 저장소)
* 변수키워드 변수명 대입연산자 대입값
* `let user_name = '횽길동';`
// user_name이란 변수를 생성해서 `홍길동`이란 데이터를 대입한다.
1. `var` : 오래된 선언방식, 이름 중복 가능
2. `let` : 이름 중복 불가능, 재사용(수정) 가능 
3. `const` : 이름 중복 불가능, 재사용(수정) 불가
### 객체, 속성, 함수 작성 문법
* 태그 예) `<a href="./index.html"></a>`
* 태그 예) `<video src="./cat.mp4" autoplay>`
* `객체.속성;`
    * 객체의 속성을 읽기
    * `a.href;`
    * `video.src;`, `video.autoplay;`
    * `span.textContent;` //span태그 안 내용을 읽는다. <span>내용</span>
    * `input.value;` // `value`는 `input`전용 속성으로 다른 태그에 사용불가 
* `객체.속성 = '값';`
    * 객체의 속성 값을 대입하기
    * 대입 시 기존값이 있으면 기존값 자동 제거되고 새로운 값 대입
    * `a.href = './reset.css';`
    * `video.src = './dog.mp4';`, `video.autoplay = 0;`
    * `<span>0</span>` //span의 내용 0을 -> 1로 변경
    * `span.textContent = 1 ;` // span태그의 기존내용을 제거하고 내용을 1로 대입한다에
    * `span.textContent = span.textContent+1;` // span태그의 기존 내용인 0 과 1을 연결한 값(01)을 대입한다.
    * `<input type="text" value="1">` //input의 내용 1 -> 2 변경
    * `input.value = 2;` //input태그의 value 속성의 값 기존속성을 제거하고 2로 대입한다.
    * `input.value = input.value +2;` //input태그의 value 속성의 값에 기존속성에 2를 더한 값을 대입한다. 
* `객체.함수();`
    * 객체를 함수방법으로 실행하기
    * `객체.함수() = '값';` => (x)
* `이벤트="함수();"`
    * 이벤트 동작 시 특정 함수를 실행한다.
    * `<태그 onclick="func();">` //함수호출
    * 위 작성 전 준비사항 : `function func(){반복실행형}` //함수생성
## DOM(document oject model)
### JS에서 제어하고 싶은 HTML요소가 있을 경우 순서
1. 제어하고 싶은 HTML 수와 클래스, id 등 확인
2. 용도에 맞게 변수명 생성 `const 변수명`
3. 2번 변수 대입 연산자로 객체 대입하기
    * `document.querySelector('HTML대상')`
    * `const 변수명 = document.querySelector('HTML대상');`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
    * `console.log(검사하고싶은변수명);`
    * `null`이 뜬다면 HTML script 작성위치로 가서 속성 추가
        * `<script src="경로" defer></script>`
## 실제 요소 크기와 관계없는 다양한 디자인 포인트 만드는 방법
### CSS의 가상 선택자(실제 태그 없이 가상의 요소를 생성)
### after, before
* `선택자::after`
* `선택자::before`
* 가상선택자의 필수속성 : `content`, `display`, `width`, `height`, `position`
### 작성예시
`선택자::after {`
    `content:''; display:block;`
    `width:가로크기px; height:세로크기px;`
    `position:absolute; left right top bottom 등의 위치 좌표 추가 작성`
`}`
* after, before가 적용된 부모 선택자에 `position:relavice` 기준잡기
# form 태그
## form태그와 action, method
* form : 사용자가 서버에 전송할 데이터를 입력하는 태그들을 묶어주는 태그
* action : 그룹에 작성 또는 선택된 사용자 데이터를 전송할 URL
* method : 데이터를 보내는 방식을 정함 (get, post(보안))
## input태그와 type
* input : 사용자가 입력할 수 있는 입력창을 생성하는 태그 (type 필수)
* type : text, password, num 등 입력창의 종류를 생성
## name속성
* aution으로 저장된 사이트서버 위치에 사용자가 입력한 데이터를 전송할 때 구분하는 데이터 명칭
## value속성
* 입력양식 : 사용자가 입력하기 전 미리 채워져 있는 값
* 선택양식 : 위 name 처럼 데이터 구분명칭 
## id, class속성 
* class : 반복되는 의미명, 여러번 중복 사용 가능
* id : 독립적인 의미명, 한번만 사용 가능
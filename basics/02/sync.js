// 순서대로 실행하기  (결과 비교: 02\results\sync.js)
function displayA() {
    console.log('A');
}

function displayB(callback) {
    setTimeout(() => {
        console.log('B');
        callback();
    }, 2000);
}
function displayC() {
    console.log('C');
}

displayA();
// displayB();
// displayC();

/**
 * 비동기 처리 : 원하는 순서에 따라 처리
 */
// 콜백 함수
displayB(displayC)
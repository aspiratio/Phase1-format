// スタートをクリック
// 3つのボタンのdisable解除
// 3つの数字が0.1秒に1ずつ増える0〜9（初期値0）

// 3つそれぞれのストップをクリック
// 数字の変更を停止
// ボタンをdisableする

// 3つの数字がストップしたら
// 	3つの数字が等しいとき
// 		成功！とアラート
// 	そうでなければ
// 		再挑戦とアラート

//表示時間の要素の取得
const nowTime1 = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");
//ストップボタン
const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");
//スタートボタン
const startTimer = document.getElementById("startTimer");

//表示時間のtextContent
nowTime1.textContent = 0;
nowTime2.textContent = 0;
nowTime3.textContent = 0;

//繰り返し処理を代入する変数
let timer1;
let timer2;
let timer3;

//数字を増やす関数
function countUp(nowTime) {
	if (nowTime.textContent < 9) {
		nowTime.textContent++;
	} else {
		nowTime.textContent = 0;
	}
}

startTimer.addEventListener("click", function() {
	clearInterval(timer1);
	clearInterval(timer2);
	clearInterval(timer3);
	setTime1.disabled = false;
	setTime2.disabled = false;
	setTime3.disabled = false;
	timer1 = setInterval("countUp(nowTime1)", 100);
	timer2 = setInterval("countUp(nowTime2)", 100);
	timer3 = setInterval("countUp(nowTime3)", 100);
});

setTime1.addEventListener("click", function() {
	clearInterval(timer1);
	this.disabled = true;
	if (setTime2.disabled === true
		& setTime3.disabled === true) {
			if (nowTime1.textContent === nowTime2.textContent
				&& nowTime1.textContent === nowTime3.textContent) {
					alert("成功！！");
				} else {
					alert("再挑戦(T ^ T)");
				}
	}
})
setTime2.addEventListener("click", function() {
	clearInterval(timer2);
	this.disabled = true;
	if (setTime1.disabled === true
		& setTime3.disabled === true) {
			if (nowTime1.textContent === nowTime2.textContent
				&& nowTime1.textContent === nowTime3.textContent) {
					alert("成功！！");
				} else {
					alert("再挑戦(T ^ T)");
				}
	}
})
setTime3.addEventListener("click", function() {
	clearInterval(timer3);
	this.disabled = true;
	if (setTime1.disabled === true
		& setTime2.disabled === true) {
			if (nowTime1.textContent === nowTime2.textContent
				&& nowTime1.textContent === nowTime3.textContent) {
					alert("成功！！");
				} else {
					alert("再挑戦(T ^ T)");
				}
	}
})
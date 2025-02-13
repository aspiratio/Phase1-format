//ボタンの要素を取得
//進化するのイベントリスナー
//表示している画像を消す
//0~9の数字をランダムに選択
//画像1を入れる
	//4以上なら画像2を入れる
	//7以上なら画像3を入れる
	//9以上なら画像4を入れる
//リセットのイベントリスナー
//表示している画像を消す

const setBtn = document.getElementById("setBtn");
const resetBtn = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");

const img1 = "./img/evolution1.png";
const img2 = "./img/evolution2.png";
const img3 = "./img/evolution3.png";
const img4 = "./img/evolution4.png";

setBtn.addEventListener("click", function() {
	showImg.innerHTML = "";
	const randomNum = Math.random() * 10;
	const image1 = document.createElement("img");
	image1.setAttribute("src", img1)
	showImg.appendChild(image1);
	if (randomNum >= 4) {
		const image2 = document.createElement("img");
		image2.setAttribute("src", img2)
		showImg.appendChild(image2);
	}
	if (randomNum >= 7) {
		const image3 = document.createElement("img");
		image3.setAttribute("src", img3)
		showImg.appendChild(image3);
	}
	if (randomNum >= 9) {
		const image4 = document.createElement("img");
		image4.setAttribute("src", img4)
		showImg.appendChild(image4);
	}
	console.log(randomNum);//数値確認用
});

resetBtn.addEventListener("click", function() {
	showImg.innerHTML = "";
});
var randomNumber=Math.floor((Math.random()*101));
// 设置随机数值
console.log(randomNumber);

var guessField=document.querySelector('.guessField');
console.log(guessField);
// console.log(guessField.Value);

var guessSubmit=document.querySelector('.guessSubmit');
// console.log(guessSubmit);
// console.log(guesses.Value);
var lowOrHi=document.querySelector(".lowOrHi");
var lastResult=document.querySelector(".lastResult");
var guesses=document.querySelector(".guesses");
console.log(guesses);
// 当用户输入数值时 我们设置输入次数为一
var guessCount=1;
var resetButton;
guessField.focus();

//定义猜数游戏函数
function checkGuess() {
    var userGuess = Number(guessField.value);
    if(guessCount === 1) {
      guesses.textContent = '上次猜的数: ';
    }
    guesses.textContent += userGuess + ' ';
    
    if(userGuess === randomNumber) {
      lastResult.textContent = '恭喜你猜对了！';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver()
    } else if(guessCount === 10) {
      lastResult.textContent = '!! 你被淘汰了 !!!';
      lowOrHi.textContent = '';
      setGameOver()
    } else {
      lastResult.textContent = '对不起，猜错了！';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = '你猜小了！';
      } else if(userGuess > randomNumber) {
        //大了提示
        lowOrHi.textContent = '你猜大了！';
      }
    }

    guessCount++;
    // 清空文本区
    guessField.value=" ";
}
//确定按钮设置单击事件
uessSubmit.addEventListener('click', checkGuess);
// 单击事件
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '重新游戏';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
function resetGame() {
  guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
}



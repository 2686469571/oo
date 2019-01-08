
var imagesA=document.getElementById('images').children;
console.log(imagesA);

// document.querySelector('#images a:nth-child(1)').style.display='none';
// document.querySelector('#images a:nth-child(4)').style.display="block";

// imagesA[0].style.display='none';
// imagesA[4].style.display='block';


// 26行元素隐藏
// imagesA[0].className="hiddenImg";
// // 30行显示
// imagesA[4].className="displayImg";

//利用计时器间隔1s，显示1张图像，其余图像隐藏。

var currentNo=0;
function changeImg(){
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i])

    }
    imagesA[currentNo].className="displayImg";
    
    if(currentNo<7){currentNo++;}

    else{
        currentNo=0;
    }
 console.log(imagesA);
}

var timer=window.setInterval(changeImg,1000)


//鼠标移出后定时器
function stopChange(){
    window.clearInterval(timer);
}
// 鼠标移入后中设定时器
function startChange(){
    timer=window.setInterval(changeImg,1000);
}
var imagesDiv=document.getElementById("images");
//为图像DIV注
imagesDiv.addEventListener('mouseover',stopChange);
imagesDiv.addEventListener('mouseout',startChange);
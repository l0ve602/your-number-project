let inputNumber = document.getElementById("input-number")
let goButton = document.getElementById("go-button")
let numberRange = [82331580,34723304,27265608,23495618,21057692,19444309,18183219,17233880,16501541,15885264,13776355,11574267,10340350,9506149,8833383,8299820,7885257,7529520,7216101,6939521,6686352,6451602,6230687,6022726,5829227,5644543,5468136,5300046,5141004,4998231,4866672,4736298,4613202,4493636,4378533,4267812,4163218,4062701,3971596,3880674,3791578,3706295,3623650,3542628,3470474,3397015,3326298,3257690,3191355,3125953,3062782,3006413,2954942,2899277,2844424,2790787,2737354,2687897,2637169,2587319,2537496,2495788,2451889,2405921,2361535,2315445,2273158,2229595,2190159,2148735,2108041,2072094,2031603,2001408,1979955,1941493,1916703,1892604,1841442,1790890,1731971,1671932,1608153,1545307,1487127,1424037,1357864,1291117,1224788,1165837,1096094,1026756,979490,912586,842879,778983,712282,647975,591783,527477,474084,410465,350177,296256,235682,179693,129140,72258,17567]
let resultRange = ["상위 0.1% ","상위 0.2% ","상위 0.3% ","상위 0.4% ","상위 0.5% ","상위 0.6% ","상위 0.7% ","상위 0.8% ","상위 0.9% ","상위 1.0% ","상위 2%","상위 3%","상위 4%","상위 5%","상위 6%","상위 7%","상위 8%","상위 9%","상위 10%","상위 11%","상위 12%","상위 13%","상위 14%","상위 15%","상위 16%","상위 17%","상위 18%","상위 19%","상위 20%","상위 21%","상위 22%","상위 23%","상위 24%","상위 25%","상위 26%","상위 27%","상위 28%","상위 29%","상위 30%","상위 31%","상위 32%","상위 33%","상위 34%","상위 35%","상위 36%","상위 37%","상위 38%","상위 39%","상위 40%","상위 41%","상위 42%","상위 43%","상위 44%","상위 45%","상위 46%","상위 47%","상위 48%","상위 49%","상위 50%","상위 51%","상위 52%","상위 53%","상위 54%","상위 55%","상위 56%","상위 57%","상위 58%","상위 59%","상위 60%","상위 61%","상위 62%","상위 63%","상위 64%","상위 65%","상위 66%","상위 67%","상위 68%","상위 69%","상위 70%","상위 71%","상위 72%","상위 73%","상위 74%","상위 75%","상위 76%","상위 77%","상위 78%","상위 79%","상위 80%","상위 81%","상위 82%","상위 83%","상위 84%","상위 85%","상위 86%","상위 87%","상위 88%","상위 89%","상위 90%","상위 91%","상위 92%","상위 93%","상위 94%","상위 95%","상위 96%","상위 97%","상위 98%","상위 99%","상위 100%"]
let middleNumber = "2,637,169"
let userInputNum = document.getElementById("result-one")
let result = document.getElementById("result-two")
let middleNum = document.getElementById("middle-num")
let errorText = document.getElementById("error-text")
let formatValue = ""

goButton.addEventListener("click",play)
// console.log(resultRange.length)
// console.log(resultRange[108])
// console.log(numberRange[108])
inputNumber.addEventListener("keyup", function(e){
  let value = e.target.value
  value = Number(value.replaceAll(",",""))
  if(isNaN(value)){
    inputNumber.value = "";
    userInputNum.textContent = "숫자만 입력하세요."

  }else{
    formatValue = value.toLocaleString()
    inputNumber.value = formatValue
  }
})

function play(){
    
    let userNumber = Number(inputNumber.value.replaceAll(",",""))
    // console.log("입력창 입력값",typeof userNumber)
    // let wage = Number(userNumber)
    // console.log("wage 타입",typeof wage)
    // errorText.textContent = ""
    inputNumber.disabled = true
    goButton.disabled = true 
    // console.log(userNumber)

    fetch('https://script.google.com/macros/s/AKfycbwqBhKJPlIxL1ct0e9-OQHRXYYUL4NOQLj6XZnW0L8h-kFx2vnP15m3sNjwEGhzHgMG/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `number=${userNumber}`  // userNumber 값을 전송
    })
    .then(response => response.text())
    .then(result => console.log(result));  // 응답 확인
    
  


    if(userNumber<numberRange[108]){
      result.innerHTML  = `근로소득 순위, 약 <span style="font-weight: bold; font-size: 150%; color:yellow;">${resultRange[108]}</span>에 해당합니다.`
            
             
             userInputNum.textContent = `입력하신 월급여 ${formatValue}원은`
             middleNum.textContent = `중위(근로)소득 : 월 ${middleNumber}원`
             return ;
    }
        for(i=0 ; i<numberRange.length ; i++){
            if(userNumber >= numberRange[i]){
             
             console.log(resultRange[i])
             
             result.innerHTML  = `근로소득 순위, 약 <span style="font-weight: bold; font-size: 150%; color:yellow;">${resultRange[i]}</span>에 해당합니다.`
            
             
             userInputNum.textContent = `입력하신 월급여 ${formatValue}원은`
             middleNum.textContent = `중위(근로)소득 : 월 ${middleNumber}원`
             return ;
            }
         }           
}



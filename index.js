"use strict"
document.getElementById("app").innerHTML = `
<div class="container">
    <h1>Covertor</h1>
    <input id="idnum" type="text">
    <div class="inputArea">
      <div class="dec1">
        <h2>From<h2>
          <form>
           <select id="deid1">
            <option value="1">Hexadecimal</option>
            <option value = "2">Decimal</option>
            <option value="3">Octal</option>
            <option value="4">Binary</option>
          </select>
          </form>
      </div>
      <div class="dec2" >
        <h2>To<h2>
          <form>
           <select  id="deid2">
            <option value="1">Hexadecimal</option>
            <option value = "2">Decimal</option>
            <option value="3">Octal</option>
            <option value="4">Binary</option>
          </select>
          </form>
      </div>
    </div>
        <div class="btn">
          <button id="convertor">Convert</button>
        </div>
  </div>
  <div id="result">
            <h1></h1>
  </div>
`;

document.getElementById("convertor").onclick = function () {
  let num = document.getElementById("idnum").value;
  let fstId = document.getElementById("deid1");
  let sndId = document.getElementById("deid2");
  let result = document.getElementById("result").childNodes[1];

  let fstValue = fstId.value;
  let sndValue = sndId.value;
  if (num == "") {
    alert("Please Enter number");
  } else if (fstValue == "1") {
    if (sndValue == fstValue) {
      result.innerHTML = num;
    }
    if (sndValue == "2") {
      let ans = parseInt(num, 16);
      result.innerHTML = ans;
    } else if (sndValue == "3") {
      let ans = parseInt(num, 16).toString(8);
      result.innerHTML = ans;
    } else if (sndValue == "4") {
      let ans = parseInt(num, 16).toString(2);
      result.innerHTML = ans;
    }
  } else if (fstValue == "2") {
    if (sndValue == fstValue) {
      result.innerHTML = num;
    }
    if (sndValue == "1") {
      let ans = parseInt(num).toString(16);
      result.innerHTML = ans;
    } else if (sndValue == "3") {
      let ans = parseInt(num).toString(8);
      result.innerHTML = ans;
    } else if (sndValue == "4") {
      let ans = parseInt(num).toString(2);
      result.innerHTML = ans;
    }
  } else if (fstValue == "3") {
    if (sndValue == fstValue) {
      console.log(num);
    }
    if (sndValue == "2") {
      let ans = parseInt(num, 8);
      result.innerHTML = ans;
    } else if (sndValue == "1") {
      let ans = parseInt(num, 8).toString(16);
      result.innerHTML = ans;
    } else if (sndValue == "4") {
      let ans = parseInt(num, 8).toString(2);
      result.innerHTML = ans;
    }
  } else if (fstValue == "4") {
    if (sndValue == fstValue) {
      inner.innerHTML = num;
    }
    if (sndValue == "1") {
      let ans = parseInt(num, 10).toString(16);
      result.innerHTML = ans;
    } else if (sndValue == "3") {
      let ans = parseInt(num, 10).toString(8);
      result.innerHTML = ans;
    } else if (sndValue == "2") {
      let ans = parseInt(num, 2);
      result.innerHTML = ans;
    }
  }
};
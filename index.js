var btnFive = document.getElementsByClassName("five-percent");
var bill = document.getElementsByClassName("bill-message");
var people = document.getElementsByClassName("person-message");
var tipMessage = document.getElementsByClassName("tip-price");
var totalMessage = document.getElementsByClassName("total-price");
tipMessage.innerTEXT = "";
totalMessage.innerTEXT = "";
btnFive.addEventListener("click", function () {
    function fivePercent() {
        var tipValue, value = bill.value * 0.5;
        var totalTip, value = tipValue.value * people;
        tipMessage.innerHTML = "$".concat(tipValue);
        totalMessage.innerHTML = "$".concat(totalTip);
    }
});


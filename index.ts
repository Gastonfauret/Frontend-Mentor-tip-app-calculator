const five = document.getElementsByClassName("five-percent");
const bill = document.getElementsByClassName("bill-message");
const people = document.getElementsByClassName("person-message");
const tipMessage = document.getElementsByClassName("tip-price");
const totalMessage = document.getElementsByClassName("total-price");
tipMessage.innerTEXT = "";
totalMessage.innerTEXT = "";

five.addEventListener ("click", () => {
    function fivePercent () {
        const tipValue.value = bill.value * 0.5;
        const totalTip.value = tipValue.value * people;
        tipMessage.innerHTML = `$${tipValue}`
        totalMessage.innerHTML = `$${totalTip}`
    }
});

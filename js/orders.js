function calcAmount() {
    let price = 1200;
    let extraPrice = parseInt(document.querySelector("input[name=extraOrder]:checked").value);
    let sauceType = parseInt(document.querySelector("#sauceList").value);
    let quantity = parseInt(document.querySelector("input[name='quantity']").value);
    let totalPrice = quantity*(price+extraPrice+sauceType);
    let showAmount = document.querySelector("span.show-amount");
    showAmount.innerHTML =totalPrice;
}
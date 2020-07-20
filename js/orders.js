//Init data
let price = 1200;
let delivery = 500;


//Adatok imputja, kattintásra veszi fel
function calcAmount() {
    let name = document.querySelector("#inputName").value.trim();
    let email = document.querySelector("#inputEmail").value.trim();
    let address = document.querySelector("#inputAddress").value.trim();
    let comment = document.querySelector("#inputComment").value.trim();

    validatingInputs(name, email, address, comment, quantity);
}
//inputok validálása
function validatingInputs(name, email, address, comment, quantity) {
    if (!name || name.length < 2) {
        alert("Név megadása kötelező!");
    } else if (!email || email.indexOf("@") < 0 || email.indexOf(".") < 1) {
        alert("Invalid email cím!");
    } else if (address.length < 10) {
        alert("Kérjük pontos címet adj meg!");
    } else if (comment.indexOf("<") >= 0 && comment.indexOf(">") >= 0) {
        alert("A megjegyzésben nem megengedett a HTML használata.");
    } else if (!quantity || quantity < 1 || quantity > 10) {
        alert("A rendelés mennyisége minimum 1, maximum 10 darab.")
    } else {
        finalCalculation(quantity);
    }
}
//végső kalkulálás, delivery hozzáadás
function finalCalculation() {
    let quantity = parseInt(document.querySelector("input[name='quantity']").value);
    let extraPrice = parseInt(document.querySelector("input[name=extraOrder]:checked").value);
    let sauceType = parseInt(document.querySelector("#sauceList").value);

    let totalPrice = quantity * (price + extraPrice + sauceType);
    totalPrice = totalPrice < 5000 ? totalPrice + delivery : totalPrice; 
    let showAmount = document.querySelector("span.show-amount");
    showAmount.innerHTML = totalPrice;
}
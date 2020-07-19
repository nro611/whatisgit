function calcAmount() {
    let name = document.querySelector("#inputName").value.trim();
    let email = document.querySelector("#inputEmail").value.trim();
    let address = document.querySelector("#inputAddress").value.trim();
    let comment = document.querySelector("#inputComment").value.trim();

    let price = 1200;
    let extraPrice = parseInt(document.querySelector("input[name=extraOrder]:checked").value);
    let sauceType = parseInt(document.querySelector("#sauceList").value);
    let quantity = parseInt(document.querySelector("input[name='quantity']").value);

    if (!name || name.length < 2) {
        alert("Név megadása kötelező!");
    } else if (!email || email.indexOf("@") < 0 || email.indexOf(".") < 1) {
        alert("Invalid email cím!");
    } else if (address.length < 10) {
        alert("Kérjük pontos címet adj meg!");
    } else if (comment.indexOf("<") >=0 && comment.indexOf(">") >=0) {
        alert("A megjegyzésben nem megengedett a HTML használata.");
    } else if (!quantity || quantity < 1 || quantity > 10) {
        alert("A rendelés mennyisége minimum 1, maximum 10 darab.")
    } else {
        let totalPrice = quantity*(price+extraPrice+sauceType);
        let showAmount = document.querySelector("span.show-amount");
        showAmount.innerHTML =totalPrice;
    }

}
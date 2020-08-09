let users = [
    {name: "Balogh Zoltán", email: "baloghzoltan@gmail.com", address: "Fehérvári út 51"},
    {name: "Kovács Márton", email: "kovacsmarton@gmail.com", address: "Régi út 13"},
    {name: "Kelemen Sára", email: "kelemensara@gmail.com", address: "Kék utca 1"},
    {name: "Kiss Péter", email: "kisspeter@gmail.com", address: "Pillangó sor 113"},
    {name: "Nagy Zoé", email: "nagyzoe@gmail.com", address: "Bécsi tér 2"},
    {name: "Áron Kálmán", email: "aronkalman@gmail.com", address: "Sopron utca 14"},
    {name: "Farkas Bianka", email: "farkasbianka@gmail.com", address: "Kerekerdő sor 55"},
    {name: "Kováts Adrienn", email: "kovatsadrienn@gmail.com", address: "Hámori út 20"},
    {name: "Nagy Katalin", email: "nagykatalin@gmail.com", address: "Diófa utca 47"},
    {name: "Tóth Béla", email: "tothbela@gmail.com", address: "Korzó tér 4"},
];
let tableBody = document.querySelector("#userTable tbody");

let createButtonGRoup = parent => {
    let group = document.createElement("div");
    group.className="btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className="btn-info btn";
    btnInfo.innerHTML='<i class="fas fa-edit"></i>';
    
    let btnDanger = document.createElement("button");
    btnDanger.className="btn-danger btn";
    btnDanger.innerHTML='<i class="fas fa-trash-alt"></i>';
    
    group.appendChild(btnInfo);
    group.appendChild(btnDanger);
    
    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
};

//td készítése, html amit meg kell jeleníteni, és hogy mihez adjuk hozzá
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};
/*Végigiterálunk a usereken, minden indexre csinálunk egy sort, minden értékre az indexben
 (toth bela, tothbela@gmail.com, bécsi tér 2) csinálunk egy td-t és childként a tr-hez adjuk */
for (let k in users) {
    let tr = document.createElement("tr");
    for (let value of Object.values(users[k])){
        createTD(value, tr);
    };
    createButtonGRoup(tr);
    tableBody.appendChild(tr);
};

let addUserButton = document.querySelector(".mid button");
let addUserName = document.querySelector("input#inputName");
let addEmail = document.querySelector("input#inputEmail");
let addAddress = document.querySelector("input#inputAddress");

addUserButton.addEventListener("click", function(){
    let newName = addUserName.value;
    let newEmail = addEmail.value;
    let newAddress = addAddress.value;
    users.push({name: newName, email: newEmail, address: newAddress});
});

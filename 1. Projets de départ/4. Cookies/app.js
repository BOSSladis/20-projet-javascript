const inputName = document.querySelector('input#name');
const inputValue = document.querySelector('input#value');
const outputCookie = document.querySelector('#cookies-output');

function addCookie(){
    const name = inputName.value.trim();
    const value = inputValue.value.trim();

    setCookie(name,value);

    displayToast("Cookie bien enregistré !");
}

function setCookie(name, value, days=1) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
  
function displayCookies() {
    const ul = document.createElement('ul');
    ul.classList.add("cookies")

    const cookies = document.cookie.split("; ");

    for(const cookie of cookies){
        const name = cookie.split("=")[0];
        const value = cookie.split("=")[1];

        const li = document.createElement('li');
        li.classList.add("cookie");
        
        const pName = document.createElement('p');
        pName.innerHTML = `Nom : <span>${name}</span>`;

        const pValue = document.createElement('p');
        pValue.innerHTML = `Valeur : <span>${value}</span>`;

        const btnDelete = document.createElement('button');
        btnDelete.innerHTML = "x";
        btnDelete.id = `cookie-${name}`;
        btnDelete.classList.add("cookie__btn-delete");
        btnDelete.onclick=deleteCookie;

        li.appendChild(pName);
        li.appendChild(pValue);
        li.appendChild(btnDelete);
        ul.appendChild(li);
    }

    outputCookie.replaceChild(ul, outputCookie.querySelector(".cookies"))
}

function deleteCookie(event){
    const id = event.target.id;
    const startIndex = id.indexOf("cookie-") + "cookie-".length;
    const cookieName = id.substring(startIndex);
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    
    displayToast("Cookie bien supprimé !");
}

function displayToast(text) {
    const toast = document.querySelector('#toast');
    const spanText = toast.querySelector("span");
    spanText.textContent = text;

    function showToast() {
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
        }, 1000);
    }

    showToast();
}

function closeToast() {
    const toast = document.querySelector('#toast');
    toast.classList.remove('show');
}



displayToast("ça marche !");
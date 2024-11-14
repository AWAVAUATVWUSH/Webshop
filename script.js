function activate(divId,aID) {
    document.getElementById('div-products-home').className = 'divtohide';
    document.getElementById('div-products-headphones').className = 'divtohide';
    document.getElementById('div-products-laptops').className = 'divtohide';
    document.getElementById('div-products-smartphones').className = 'divtohide';
    document.getElementById('div-products-cameras').className = 'divtohide';
    document.getElementById('div-products-accessories').className = 'divtohide';

    document.getElementById('a-home').className = 'navlist-a-inactive';
    document.getElementById('a-headphones').className = 'navlist-a-inactive';
    document.getElementById('a-laptops').className = 'navlist-a-inactive';
    document.getElementById('a-smartphones').className = 'navlist-a-inactive';
    document.getElementById('a-cameras').className = 'navlist-a-inactive';
    document.getElementById('a-accessories').className = 'navlist-a-inactive';

    document.getElementById(divId).className = 'divtoshow';
    document.getElementById(aID).className = 'navlist-a-active';
}

function showErrorMessage(event) {
    event.stopPropagation();
    alert("Feature not implimented");

}

function showErrorMessage2(event) {
    event.stopPropagation();
    alert("Feature not implimented 2");
}

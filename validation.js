let formInputs = document.querySelectorAll('.js-input'),
    inputName = document.querySelector('.js-input-name'),
    inputSurname = document.querySelector('.js-input-surname'),
    inputFather = document.querySelector('.js-input-father'),
    inputDate = document.querySelector('.js-input-date'),
    inputNumber = document.querySelector('.js-input-number'),
    rIndex,
    table = document.getElementById("table"),
    inputEmail = document.querySelector('.js-input-email');

let validationMessage = 'Заповніть пусті інпути';
let emailMessage = 'Неправильно введена електронна адреса';
let coMessage = 'Допишіть m в кінці)';
let letterMessage = 'Використайте літери українського алфавіту!';
let dateMessage = document.getElementById('validationDate');
let numberMessage = 'Заповніть номер телефону правильно!';

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateName(name) {
    let re = new RegExp("^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$");
    return re.test(String(name).toLowerCase());
}

function validateSurname(surname) {
    let re = new RegExp("^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$");
    return re.test(String(surname).toLowerCase());
}

function validateFather(father) {
    let re = new RegExp("^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$");
    return re.test(String(father).toLowerCase());
}

function validateCountry(country) {
    let re = new RegExp('.co$');
    return re.test(String(country).toLowerCase());
}

function validateNumber(number) {
    let re = /\+380\(\d{2}\)\d{3}-\d{2}-\d{2}/;
    return re.test(String(number).toLowerCase())
}

function addHtmlTableRow() {
    let emailVal = inputEmail.value,
        nameVal = inputName.value,
        surnameVal = inputSurname.value,
        fatherVal = inputFather.value,
        dateVal = inputDate.value,
        numberVal = inputNumber.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === ''),
        value = new Date(dateVal),
        min = new Date(inputDate.min),
        max = new Date(inputDate.max);


    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        document.getElementById('validation').innerHTML = validationMessage;
        return false;
    } else{
        inputEmail.classList.remove('error');
        document.getElementById('validation').innerHTML = '';
    }


    if (!validateEmail(emailVal)) {
        inputEmail.classList.add('error');
        document.getElementById('validationEmail').innerHTML = emailMessage;
        return false;
    } else {
        inputEmail.classList.remove('error');
        document.getElementById('validationEmail').innerHTML = '';
    }


    if (validateCountry(emailVal)) {
        inputEmail.classList.add('error');
        document.getElementById('validationEmail').innerHTML = coMessage;
        return false;
    } else {
        inputEmail.classList.remove('error');
        document.getElementById('validationEmail').innerHTML = '';
    }

    if (!validateName(nameVal)) {
        inputName.classList.add('error');
        document.getElementById('validationName').innerHTML = letterMessage;
        return false;
    } else {
        inputName.classList.remove('error');
        document.getElementById('validationName').innerHTML = '';
    }


    if (!validateSurname(surnameVal)) {
        inputSurname.classList.add('error');
        document.getElementById('validationSurname').innerHTML = letterMessage;
        return false;
    } else {
        inputSurname.classList.remove('error');
        document.getElementById('validationSurname').innerHTML = '';
    }


    if (!validateFather(fatherVal)) {
        inputFather.classList.add('error');
        document.getElementById('validationFather').innerHTML = letterMessage;
        return false;
    } else {
        inputFather.classList.remove('error');
        document.getElementById('validationFather').innerHTML = '';
    }


    if (value < min || value > max) {
        inputDate.classList.add('error');
        dateMessage.innerHTML = 'Дата повинна бути між ' + min.toDateString() + ' і ' + max.toDateString();
        return false;
    }

    if (!validateNumber(numberVal)) {
        inputNumber.classList.add('error');
        document.getElementById('validationNumber').innerHTML = numberMessage;
        return false;
    } else {
        inputNumber.classList.remove('error');
        document.getElementById('validationNumber').innerHTML = '';
    }

    let newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),
        cell8 = newRow.insertCell(7),
        cell9 = newRow.insertCell(8),
        cell10 = newRow.insertCell(9),

        mail = document.getElementById("inputEmail").value,
        pass = document.getElementById("inputPass").value,
        name = document.getElementById("inputName").value,
        surname = document.getElementById("inputSurname").value,
        father = document.getElementById("inputFather").value,
        date = document.getElementById("inputDate").value,
        number = document.getElementById("inputNumber").value,
        sex = document.querySelector('input[name = sex]:checked').value,
        group = document.querySelector('input[name = group]:checked').value;


    cell2.innerHTML = mail;
    cell3.innerHTML = pass;
    cell4.innerHTML = name;
    cell5.innerHTML = surname;
    cell6.innerHTML = father;
    cell7.innerHTML = date;
    cell8.innerHTML = number;
    cell9.innerHTML = sex;
    cell10.innerHTML = group;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    cell1.appendChild(checkbox);

    selectedRowToInput();
    return false;
}

function selectedRowToInput() {
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("inputEmail").value = this.cells[1].innerHTML;
            document.getElementById("inputPass").value = this.cells[2].innerHTML;
            document.getElementById("inputName").value = this.cells[3].innerHTML;
            document.getElementById("inputSurname").value = this.cells[4].innerHTML;
            document.getElementById("inputFather").value = this.cells[5].innerHTML;
            document.getElementById("inputDate").value = this.cells[6].innerHTML;
            document.getElementById("inputNumber").value = this.cells[7].innerHTML;
            document.querySelector('input[name = sex]:checked').value = this.cells[8].innerHTML;
            document.querySelector('input[name = group]:checked').value = this.cells[9].innerHTML;
        };
    }
}

selectedRowToInput();

function editHtmlTableSelectedRow() {
    let mail = document.getElementById("inputEmail").value,
        pass = document.getElementById("inputPass").value,
        name = document.getElementById("inputName").value,
        surname = document.getElementById("inputSurname").value,
        father = document.getElementById("inputFather").value,
        date = document.getElementById("inputDate").value,
        number = document.getElementById("inputNumber").value,
        sex = document.querySelector('input[name = sex]:checked').value,
        group = document.querySelector('input[name = group]:checked').value;

    table.rows[rIndex].cells[1].innerHTML = mail;
    table.rows[rIndex].cells[2].innerHTML = pass;
    table.rows[rIndex].cells[3].innerHTML = name;
    table.rows[rIndex].cells[4].innerHTML = surname;
    table.rows[rIndex].cells[5].innerHTML = father;
    table.rows[rIndex].cells[6].innerHTML = date;
    table.rows[rIndex].cells[7].innerHTML = number;
    table.rows[rIndex].cells[8].innerHTML = sex;
    table.rows[rIndex].cells[9].innerHTML = group;
}

function DeleteTableRow(id) {
    let table = document.getElementById(id);
    let row = table.rows.length;
    let counter = 0;
    if (table.rows.length > 1) {
        for (let i = 0; i < table.rows.length; i++) {
            let chk = table.rows[i].cells[0].childNodes[0];
            if (chk.checked) {
                table.deleteRow(i);
                row--;
                i--;
                counter = counter + 1;
            }
        }
        if (counter === 0) {
            document.getElementById('validation').innerHTML = 'Будь ласка, виберіть рядок, який ви хочете видалити.';
        }
    } else {
        document.getElementById('validation').innerHTML = 'Рядки відсутні.';

    }
}

function copyRows(table) {
    let inputs = table.querySelectorAll('input[type="checkbox"]');
    let i = inputs.length;
    while (i--) {
        let input = inputs[i];
        if (input.checked === true) {
            let tr = input.parentNode.parentNode;
            let copiedRow = tr.cloneNode(tr.rowIndex);
            table.appendChild(copiedRow);
        }
    }
}

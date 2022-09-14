var id = null;

function onFormSubmit() {
    var firstname = document.getElementById("fname").value;
    var msg = document.getElementById("msg");
    var mob = document.getElementById("mob").value;
    var alt = document.getElementById("alt").value;

    var regex = /^[a-z]([-']?[a-z]+)*/;
    var phoneno = /^\d{10}$/;

    if (firstname === "" || phoneno === "") {
        msg.innerText = "Please Enter Your Full Name";
        msg.style.color = "Red";
        msg1.innerText = "Please Enter Your Mobile Number";
        msg1.style.color = "Red";
        return;
    } else {
        msg.innerText = "Accepted";
        msg.style.color = "green";
        msg1.innerText = "Accepted";
        msg1.style.color = "green";

    }
    if (regex.test(firstname) === false) {
        msg.innerText = "Please enter the valid name:";
        msg.style.color = "Red";
        onReset();
        return;
    } else if (phoneno.test(mob) === false) {
        msg1.innerText = "Please enter your 10 digit valid number:";
        msg1.style.color = "Red";
        return;
    } else if (mob == alt) {
        msg2.innerText = "Mobile number and Alt number can't be the same:Please try other";
        msg2.style.color = "Red";
        return
    } else {
        let formData = readData();
        if (regex.test(firstname) === true && phoneno.test(mob) === true) {
            insertData(formData);
            localStorage.setItem("Name", firstname);
            localStorage.setItem("Mobile Number", mob);
            localStorage.setItem("Alt Mobile Number", alt);
            onReset();
        } else {
            onUpdate(formData);
            onReset();
        }
    }
}

function readData() {
    var formData = {};
    formData['fname'] = document.getElementById("fname").value;
    formData['mob'] = document.getElementById("mob").value;
    formData['alt'] = document.getElementById("alt").value;
    formData['gender'] = document.querySelector('input[type=radio][name=gender]:checked').value;
    return formData;
}

function insertData(data) {
    var no = 1;
    var table = document.getElementById("store_list").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mob;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.alt;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onclick="onEdit(this)">Edit</button>`
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick="onDelete(this)" id="btn2">Delete</button>`;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.gender;
}

function onEdit(td) {
    id = td.parentElement.parentElement;
    document.getElementById("fname").value = id.cells[0].innerHTML;
    id = td.parentElement.parentElement;
    document.getElementById("mob").value = id.cells[1].innerHTML;
    id = td.parentElement.parentElement;
    document.getElementById("alt").value = id.cells[2].innerHTML;
}

function onUpdate(formData) {
    id.cells[0].innerHTML = formData.fname;
    id.cells[1].innerHTML = formData.mob;
    id.cells[2].innerHTML = formData.alt;
}

function onDelete(td) {
    if (confirm("Do you want to delete this record ?")) {
        var row = td.parentElement.parentElement;
        document.getElementById("store_list").deleteRow(row.rowIndex);
    }
    onReset();
}

function onReset() {
    document.getElementById("fname").value = "";
    document.getElementById("mob").value = "";
    document.getElementById("alt").value = "";
}

var stateObject = {
    "India": {
        "Delhi": ["new Delhi", "North Delhi"],
        "Karnataka": ["Bengaluru", "Mysore"],
        "Tamilnadu": ["Chennai", "Madurai"],
    },
    "Australia": {
        "South Australia": ["Dunstan", "Mitchell"],
        "Victoria": ["Altona", "Euroa"]
    },
    "Canada": {
        "Alberta": ["Acadia", "Bighorn"],
        "Columbia": ["Washington", ""]
    },
}
onload = function () {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}

function addToLocal() {

    var testObject={
        "Name":""
    }

    localStorage.setItem("Name", firstname);
    localStorage.setItem("Mobile Number", mob);
    localStorage.setItem("Alt Mobile Number", alt);


    // var retrievedObject = localStorage.getItem('firstname');
    // var retrievedObject1 = localStorage.getItem('mob');
    // var retrievedObject2 = localStorage.getItem('alt');
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
    // console.log('retrievedObject: ', JSON.parse(retrievedObject1));
    // console.log('retrievedObject: ', JSON.parse(retrievedObject2));

}

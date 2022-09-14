function validation(){
    event.preventDefault();
    var name = document.getElementById("fname").value;
    var msg = document.getElementById("msg");
    var mob = document.getElementById("lname").value;
    var regex = /^[a-z]([-']?[a-z]+)*/;
    var phoneno = /^\d{10}$/;

    if (name === ""|| phoneno==="" ){
        msg.innerText = "Please Enter Your Full Name";
        msg.style.color = "Red";
        msg1.innerText = "Please Enter Your Mobile Number";
        msg1.style.color = "Red";
        return;
    }else{
        msg.innerText = "Accepted";
        msg.style.color = "green";
        msg1.innerText = "Accepted";
        msg1.style.color = "green";
    }
    if (regex.test(name) === false) {
        msg.innerText = "Please enter the valid name:";
        msg.style.color = "Red";
        onReset();
        return;
    }else{
        onFormSubmit;
    }
        
    

}
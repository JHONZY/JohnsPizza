function message(){
    var Fname = document.getElementById('Fname');
    var Address = document.getElementById('Address');
    var Contact = document.getElementById('Contact');
    var Pizza = document.getElementById('Pizza');
    var Quantity = document.getElementById('Quantity');
    var Message = document.getElementById('Message');

    const success = document.getElementById('success');

    if(Fname.value === '' || Address.value === '' || Contact.value === '' || Pizza.value === '' 
    || Quantity.value === '' || Message.value === ''){
        
    }
    else{
        setTimeout(() =>{
            Fname.value = '';
            Address.value = '';
            Contact.value = '';
            Pizza.value = '';
            Quantity.value = '';
            Message.value = '';
        },2000);

        success.style.display = "block";
    }

    setTimeout(() =>{
        success.style.display = "none";
    },4000)
}


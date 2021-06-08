const uname = document.getElementById('uname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const category = document.getElementById('category');
const addBtn = document.getElementById('addBtn');


const database = firebase.database();

const rootRef = database.ref('/contact');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const autoId = rootRef.push().key
    if(uname.value =="" || email.value=="" || subject.value=="" || message.value==""){
        document.getElementById('alert').style.display = "block";
        document.getElementById('alert').innerHTML= "Fill out all the fields";
        document.getElementById('alert').style.fontSize = "17px";
    }
    else{
        rootRef.child(autoId).set({
            name: uname.value,
            email: email.value,
            category: category.value,
            subject: subject.value,
            message: message.value
        });

        document.getElementById('alert').innerHTML= "Thanks for contacting us";
        document.getElementById('alert').style.backgroundColor = "green";
        document.getElementById('alert').style.display = "block";
        document.getElementById('alert').style.fontSize = "17px";
        window.setTimeout(() => {
            document.getElementById('alert').style.display = "none";
        }, 2000);
        uname.value= "";
        email.value= "";
        category.selectedIndex = 0;
        subject.value= "";
        message.value= "";

    }
});




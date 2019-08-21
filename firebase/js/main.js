document.querySelector("#person-form").addEventListener("submit", function (e) {
    e.preventDefault()
    console.log("hello")
    submitperson()
})


var firebaseConfig = {
    apiKey: "AIzaSyD_6C5C9wUfHz3rbv181pZFWRhJ-ux5UpE",
    authDomain: "kheder-linda.firebaseapp.com",
    databaseURL: "https://kheder-linda.firebaseio.com",
    projectId: "kheder-linda",
    storageBucket: "",
    messagingSenderId: "32810732295",
    appId: "1:32810732295:web:e130dfc77ca5ad41"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//create database var
let database = firebase.database()


//set a reference 
function submitperson() {
    let ref = database.ref("names")

    //prepare data 
    let data =
    {
        name: document.querySelector("#name").value,
        track: document.querySelector("#track").value,
        Email: document.querySelector("#Email-adress").value,
        phone: document.querySelector("#phonenumber").value,


    }
    console.log(data)


    //upload data 
    ref.push(data)
}
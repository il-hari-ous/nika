const firebaseConfig = {
  apiKey: "AIzaSyDKtnXcFjSc5qOg04NdS6el1MPvSFGLNaQ",
  authDomain: "studios-675db.firebaseapp.com",
  databaseURL: "https://studios-675db-default-rtdb.firebaseio.com",
  projectId: "studios-675db",
  storageBucket: "studios-675db.appspot.com",
  messagingSenderId: "647750172431",
  appId: "1:647750172431:web:12dbc096fb9771a879c87a"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var mobile = getElementVal("mobile");

    saveMessages(name, emailid, msgContent, mobile);

    document.querySelector(".alert").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("contactForm").reset();
  }

  const saveMessages = (name, emailid, msgContent, mobile) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      mobile: mobile,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
const firebaseConfig = {
  apiKey: "AIzaSyBg96FD4sTNN5j_qENOArNV960ppxQ1yCA",
  authDomain: "banquet-hall-c5635.firebaseapp.com",
  databaseURL: "https://banquet-hall-c5635-default-rtdb.firebaseio.com",
  projectId: "banquet-hall-c5635",
  storageBucket: "banquet-hall-c5635.appspot.com",
  messagingSenderId: "353784900512",
  appId: "1:353784900512:web:f1c69364820f0251a052c5"
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


  document.addEventListener("DOMContentLoaded", function() {
    const alertBox = document.querySelector(".animate-alert");
    
    // Show the alert
    alertBox.classList.add("show");
  
    // Hide the alert after 3 seconds
    setTimeout(() => {
      alertBox.classList.remove("show");
    }, 3000);
  });
  
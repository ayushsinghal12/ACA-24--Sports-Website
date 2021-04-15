const firebaseConfig = {
  apiKey: "AIzaSyBMPl_eHD5FO4voBqrY9v507MW9zGKqiaQ",
  authDomain: "ipl-results-cffab.firebaseapp.com",
  databaseURL: "https://ipl-results-cffab-default-rtdb.firebaseio.com",
  projectId: "ipl-results-cffab",
  storageBucket: "ipl-results-cffab.appspot.com",
  messagingSenderId: "550824914472",
  appId: "1:550824914472:web:e8427641490c28ce274f1d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var UserInputRef=firebase.database().ref('User Inputs')

  document.getElementById('form').addEventListener('submit', submitForm)
  
  function submitForm(e) {
    e.preventDefault()
    var year=document.getElementById('dropdown').value
    showResults(year)
    saveData(year)
  }
  
  function saveData(year) {
    var newUserSubmission = UserInputRef.push()
    var submission = {
      year:year
    }
    newUserSubmission.set(submission)
  }
  
  function showResults(year) {
    var yearRef = firebase.database().ref(year)
    yearRef.on('value', function (i) {
      var result = i.val()
      document.getElementById('result').innerHTML = "Winner: " + "<div>" + result + "</div>"
    }
    )
  }

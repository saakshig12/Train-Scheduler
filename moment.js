displayData = {};
counter = 0; 

var firebaseConfig = {
    apiKey: "AIzaSyDdVcwPicYf2-pv-0Y3Si6qayuL2sCKrjE",
    authDomain: "train-scheduler-efce6.firebaseapp.com",
    databaseURL: "https://train-scheduler-efce6.firebaseio.com",
    projectId: "train-scheduler-efce6",
    storageBucket: "",
    messagingSenderId: "903368190086",
    appId: "1:903368190086:web:bec6def251081ffe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  database = firebase.database();

  $(document).ready(function() {
    $('#formsubmit').on('click', function (event) {
        event.preventDefault()
        let trainName = $('#train-name').val().trim()
        let trainDestination = $('#train-destination').val().trim()
        let trainFrequency = $('#train-frequency').val().trim()
        let nextArrival = $('#next-arrival').val().trim()
        let minutesAway = moment()._________;
        
 
        database.ref().push({
            trainName: trainName,
            trainDestination: trainDestination,
            trainFrequency: trainFrequency,
            nextArrival: nextArrival, 
            minutesAway: minutesAway
        })
 
  }
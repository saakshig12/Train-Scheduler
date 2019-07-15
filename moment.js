var displayData = {};
var counter = 0; 

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

  var database = firebase.database();

  $(document).ready(function() {
    $('#formsubmit').on('click', function (event) {
        event.preventDefault()
        let trainName = $('#train-name').val()
        let trainDestination = $('#train-destination').val()
        let trainFrequency = $('#train-frequency').val()
        let nextArrival = $('#next-arrival').val()
        let minutesAway = $('#min-away').val()
        
 
        database.ref().push({
            trainName: trainName,
            trainDestination: trainDestination,
            trainFrequency: trainFrequency,
            nextArrival: nextArrival, 
            minutesAway: minutesAway,
        })
    })

    database.ref().on('child_added', function(snapshot) {
        newTrain = snapshot.val()
        console.log(newTrain.trainName);
        console.log(newTrain.trainDestination);

        counter++;
       
       $('#ce-data').append('<tr id=row_' + counter + '>');

       for(let i = 0; i < 6; i++){
           let newTD = $('<td>')
           $('#row_'+ counter).append(newTD)
       }

       $('#row_' + counter + ' td:nth-child(1)').text(newTrain.trainName)
       $('#row_' + counter + ' td:nth-child(2)').text(newTrain.trainDestination)
       $('#row_' + counter + ' td:nth-child(3)').text(newTrain.trainFrequency)
       $('#row_' + counter + ' td:nth-child(4)').text(newTrain.nextArrival)
       $('#row_' + counter + ' td:nth-child(5)').text(newTrain.minutesAway)
   })
})

// var numMinAway = (frequency, firstTrain)



 
    
var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

function auth() {

  var number = '+91' + document.getElementById('mobileNo').value;

  const userAuth = firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e) {

      console.log('OTP sent Sucessfully!');

      var code = prompt('Enter OTP', '');

      //if (code === null) return;

      e.confirm(code).then(function(result) {

        console.log('Sucessfully Regestered', result.user);

          //try {

            //const userAuth = firebase.auth().signInWithPhoneNumber(number);

            /*

            var userCreate =  function(){

              name: "Raja",

              phone: number,

              address: "474 Mercer Drive",

              uid: userAuth.uid,

            

            writeUserData(user)

            };

            */

        //  } catch (error) {

        //    console.log(error.message)

        //  }

        

        createNewAccount();

        

      }).catch(function(error) {

        console.error('Registration Failed', error);

      });

    })

    .catch(function(error) {

      console.error('Failed to send OTP', error);

    });

}

function IsItuser() { 

  firebase.auth().currentUser;

  if (user) {

  console.log("Loged in");

  } else {

  console.log('logged off');

  }

}

firebase.auth().onAuthStateChanged(user => {

           if(user) {

    console.log(user.uid + " Is here");

    

    

      //window.location.replace("stores.html"); 

      }

}

);

/*

   var createUser = function() {

     // Add a new document with a generated id.

     const docRef = db.collection(user).add({

       Mobile: number,

       //Location: geohash,

       name: "Raja",

       phone: number,

       address: "474 Mercer Drive",

       uid: userAuth.uid,

     });

     console.log("Voila to the DB");

   

     //console.log("Document written with ID: ", docRef.id);

     //log("Current user " + username + "'s location has been added to Database");

     // When the user disconnects from Firebase (e.g. closes the app, exits the browser),

     // remove their GeoFire entry

     //firebaseRef.child(username).onDisconnect().remove();

     //log("Added handler to remove user " + username + " from GeoFire when you leave this page.");

   };

   createUser();

*/

/*

        

*/

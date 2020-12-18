$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
var firebaseConfig = {
    apiKey: "AIzaSyC23G8IGsPRB5bJPxFBiXLVj4hDDi3WdOM",
    authDomain: "project-kwitter-e829d.firebaseapp.com",
    projectId: "project-kwitter-e829d",
    storageBucket: "project-kwitter-e829d.appspot.com",
    messagingSenderId: "963106151404",
    appId: "1:963106151404:web:997b0c3984f09054ddbec9",
    measurementId: "G-DN434SHNFN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
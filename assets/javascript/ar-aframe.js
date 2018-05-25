// variables to be passed in ar.js under overwritten aframeListener function
var userPosString;
var userPosition;
var userPosCoords;

var aframeListener = function() {}; // reference to add eventlistener elsewhere


// set up a-frame scene
AFRAME.registerComponent('marker', {
    schema: {
        default: ''
    },
    init() {
        console.log("aframe created");
        aframeRef = this;
        // click listener
        this.el.addEventListener('click', function() {
            console.log("square on board clicked");
            userPosString = this.getAttribute("id");
            // convert position string from id to number
            userPosition = parseInt(userPosString);
            // get coordinates from position attribute
            userPosCoords = this.getAttribute("position");
            // call aframeListener
            console.log("aframeListener function called for the first time w/out code");
            aframeListener();
            
        });
    }
});
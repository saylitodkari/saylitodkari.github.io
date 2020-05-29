
(function (window) {

var speakWord = "Good Bye";
var byeSpeaker = {};


 byeSpeaker.speak = function (name) {
 	console.log(speakWord+" "+name);
 }
function speak() {
 };

window.byeSpeaker= byeSpeaker;

})(window);
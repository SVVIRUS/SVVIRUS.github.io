(function(window) {
	var speakWord = "GOOD BYE EVERYBODY";
	var byeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);
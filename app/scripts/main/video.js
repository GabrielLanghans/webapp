'use strict';

var isYouTubeIframeAPIReady = false;

function Video(elem, id){

	var _that = this;

	this.player = undefined,
	this.elem = elem,
	this.id = id
	this.width = 853,
	this.height = 480,

	this.create = function() {

		this.player = new YT.Player(this.elem, {
			width: this.width,
			height: this.height,
			videoId: this.id,
			// playerVars: {'autoplay': 1},
			playerVars: { 'allowFullScreen':true, 'showControls':false, 'autoHide':false, 'showRelated':false },
			events: {
				'onReady': onPlayerReady,
				'onStateChange': this.stateChange
			}
		});
	},

	this.stateChange = function(event) {
		var state = event.data;

		if (state === 1) {
			//tracking
            Tracking.track('Video', 'Play');

		} else if (state === 2) {
			//tracking
			Tracking.track('Video', 'Pause');

		} else if (state === 0) {
			//tracking
			Tracking.track('Video', 'Finalizou');
		}
	},

	this.pause = function(){
		if(ready) this.player.pauseVideo();
		else setTimeout(function(){ _that.pause() },1000);
	},

	this.play = function(){
		if(ready) this.player.playVideo();
		else setTimeout(function(){ _that.play() },1000);
	},

	this.getState = function(){
		if(ready){
			return this.player.getPlayerState();
		} 
		else setTimeout(function(){ _that.getState() },1000);
	}

};

var ready = false;
function onPlayerReady(event) {
	ready = true;
}

function onYouTubeIframeAPIReady() {
	isYouTubeIframeAPIReady = true;
}
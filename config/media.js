// Sound clips are played when the user moves the pointer over a node.

// "head", "rfoot" etc are node ids from layout.js
// the filenames are relative to /media/

var SOUNDFILES = {
    "head": "01.mp3",     
    "rfoot": "17.mp3",
    "lfoot": "18.mp3"
};

// Video clips to be played when the user drags and releases a node.

// "head",  etc are node ids from layout.js
// the filenames are relative to /media/

var VIDEOS = {
    "head": "01.mp4",
    "lear": "02.mp4",
    "rear": "03.mp4",
    "neck": "04.mp4",
    "lhand": "09.mp4",
    "rhand": "10.mp4",
    "heart": "11.mp4",
    "groin": "12.mp4",
    "lhip": "13.mp4",
};

// Configuration for video playback.
// VWIDTH, VHEIGHT -- the geometry and size of the video window
// VOPACITY        -- opacity of the video (from 0 to 1.0)

var VWIDTH = 640;
var VHEIGHT = 480;
var VOPACITY = 0.5;

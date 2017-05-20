// Soundfiles to be triggered when the user moves the mouse pointer
// over a node. A list of key:value pairs, where each key is a node
// ID and each value is a list of sound files (relative to /media/sounds)

// SOUNDFILES = {
//    "nodeID1": [ "sound1.mp3", "sound2.mp3" ],
//    "nodeID2": [ "sound3.mp3", "sound4.mp3" ]
// }

// Note that one sound file can appear in multiple nodes.
// Sound files are picked at random from the list - to associate a single
// sound file with a node, give it a list with one file.

var SOUNDFILES = {
    "head": [ "01.mp3", "17.mp3" ],
    "rfoot": [ "17.mp3", "18.mp3"],
    "lfoot": [ "18.mp3", "01.mp3"]
};

// video config - VWIDTH and VHEIGHT are the size of the video
// windows, VOPACITY is how opaque they are.

// For a future version: these could be configured for each video?

var VWIDTH = 640;
var VHEIGHT = 480;
var VOPACITY = 0.5;

// Videos are associated with nodes in the same way that sounds are.
// The values are lists of video filenames: when the user drags and
// releases a node, one of these is selected at random and played.

var VIDEOS = {
    "head": [ "01.mp4", "2017-KrillSex.mp4" ],
    "lear": [ "02.mp4" ],
    "rear": [ "03.mp4" ],
    "neck": [ "04.mp4" ],
    "lhand": [ "09.mp4" ],
    "rhand": [ "10.mp4" ],
    "heart": [ "11.mp4" ],
    "groin": [ "12.mp4" ],
    "lhip": [ "13.mp4" ],
};

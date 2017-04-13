var PEDESTRIAN = {
    "nodes": [
        { "id": "head" },
        { "id": "rear" },
        { "id": "lear" },
        { "id": "neck" },
        { "id": "rshoulder" },
        { "id": "lshoulder" },
        { "id": "heart" },
        { "id": "rhip" },
        { "id": "lhip" },
        { "id": "groin" },
        { "id": "relbow" },
        { "id": "rhand" },
        { "id": "lelbow" },
        { "id": "lhand" },
        { "id": "rknee" },
        { "id": "rfoot" },
        { "id": "lknee" },
        { "id": "lfoot" }
    ],

    "links": [
        { "source": "head", "target": "neck", "length": 30 },
        { "source": "head", "target": "rear", "length": 20 },
        { "source": "head", "target": "lear", "length": 20 },
        { "source": "rear", "target": "lear", "length": 30 },
        { "source": "neck", "target": "rear", "length": 20 },
        { "source": "neck", "target": "lear", "length": 20 },
        
        { "source": "neck", "target": "rshoulder", "length": 30 },
        { "source": "rshoulder", "target": "relbow", "length": 50 },
        { "source": "relbow", "target": "rhand", "length": 50 },

        { "source": "neck", "target": "lshoulder", "length": 30 },
        { "source": "lshoulder", "target": "lelbow", "length": 50 },
        { "source": "lelbow", "target": "lhand", "length": 50 },

        { "source": "neck", "target": "heart", "length": 30 },
        { "source": "heart", "target": "rhip", "length": 50 },
        { "source": "heart", "target": "lhip", "length": 50 },

        { "source": "rshoulder", "target": "groin", "length": 60 },
        { "source": "lshoulder", "target": "groin", "length": 60 },
        { "source": "groin", "target": "rhip", "length": 30 },
        { "source": "groin", "target": "lhip", "length": 30 },

        { "source": "rhip", "target": "rknee", "length": 50 },
        { "source": "rknee", "target": "rfoot", "length": 50 },

        { "source": "lhip", "target": "lknee", "length": 50 },
        { "source": "lknee", "target": "lfoot", "length": 50 },
    ]
};


var SOUNDFILES = {
    "head": "2015-08-14-AndrewDavidson-01.mp3",     
    "rear": "2015-08-14-AndrewDavidson-02.mp3",     
    "lear": "2015-08-14-AndrewDavidson-03.mp3",
    "neck": "2015-08-14-AndrewDavidson-04.mp3",
    "rshoulder": "2017-02-23-05FrogPlane-Birds.mp3",
    "lshoulder": "2017-02-23-06Frog-Birds.mp3",
    "heart": "2017-02-23-07FrogPlane-Birds.mp3",
    "rhip": "2017-02-23-08Frog-Birds.mp3",
    "lhip": "2017-02-23-09Frog-Birds.mp3",
    "groin": "2017-02-23-10Frog-Birds.mp3",
    "relbow": "2017-02-23-11Frog-Birds.mp3",
    "rhand": "2017-02-23-12Frog-Birds.mp3",
    "lelbow": "2017-02-23-13Frog-Birds.mp3",
    "lhand": "2017-02-23-14Frog-Birds.mp3",
    "rknee": "2017-02-23-15Frog-Birds.mp3",
    "rfoot": "2017-02-23-16Frog-Birds.mp3",
    "lknee": "2017-02-23-17Frog-Birds.mp3",
    "lfoot": "2017-02-23-18Frog-Birds.mp3"
};


var VIDEOS = {
    "head": {
        "file": "head/AndrewDavidson-Connectivity-voice.mp4",
        "x": 100,
        "y": 100,
        "w": 320,
        "h": 240
    },
};


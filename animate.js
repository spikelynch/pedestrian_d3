
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


var sounds = {};

for( var i in SOUNDFILES ) {
    sounds[i] = new Audio("media/sounds/" + SOUNDFILES[i]);
}

// this dict is used to keep track of which windows have been opened
// if a video is open, don't open it again

var video_playing = {};



var width = 960,
    height = 500,
    radius = 5,
    downg = 1;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var simulation = d3.forceSimulation()
    .force("links", d3.forceLink().id(function(d) { return d.id }))
    .force("charge", d3.forceManyBody());
//    .force("gravity", d3.forceY(height));

simulation.velocityDecay(0.1);
simulation.nodes(pedestrian.nodes);

simulation.force("links")
    .links(pedestrian.links);

simulation.force("links").distance(function(d) { return d.length });
simulation.force("charge").strength(-100);

//simulation.force("gravity").strength(0.015);

var link = svg.selectAll(".link")
    .data(pedestrian.links)
    .enter().append("line")
    .attr("class", "limb");

var node = svg.selectAll(".node")
    .data(pedestrian.nodes)
    .enter().append("circle")
    .attr("class", "joint")
    .attr("r", radius)
    .on("mouseover", handleMouseOver)
    .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));



simulation.on("tick", function() {
    
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    
    node.attr("cx", function(d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)) })
        .attr("cy", function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)) });
    
});

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx  = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
    if( d.id in VIDEOS ) {
        showVideo(d.id);
    }   
}

function handleMouseOver(d) {
    var s = sounds[d.id];
    s.play();
}



// see http://stackoverflow.com/questions/2741493/detect-when-an-html5-video-finishes for triggering an action when a video stops playing

function showVideo(id) {
    if( id in VIDEOS ) {
        if( ! ( id in video_playing ) ) {
            console.log("Video: " + VIDEOS[id]);
            var url = 'media/videos/' + VIDEOS[id].file;
            var features = windowLoc(VIDEOS[id]);
            video_playing[id] = window.open(url, "_blank", features);
        }
    }
}

function windowLoc(vid) {
    return "location=yes,x=" + vid.x + ",y=" + vid.y + ",width=" + vid.w + ",height=" + vid.h;
}

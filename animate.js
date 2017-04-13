


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
simulation.nodes(PEDESTRIAN.nodes);

simulation.force("links")
    .links(PEDESTRIAN.links);

simulation.force("links").distance(function(d) { return d.length });
simulation.force("charge").strength(-100);

//simulation.force("gravity").strength(0.015);

var link = svg.selectAll(".link")
    .data(PEDESTRIAN.links)
    .enter().append("line")
    .attr("class", "limb");

var node = svg.selectAll(".node")
    .data(PEDESTRIAN.nodes)
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
    for (var sid in sounds) {
        console.log(sounds[sid]);
        sounds[sid].pause();
    }
    if( id in VIDEOS ) {
        if( ! ( id in video_playing ) ) {
            var v = VIDEOS[id];
            var url = 'media/videos/' + v.file;
            console.log("Adding video element at " + v.x + ", " + v.y);
            var g = d3.select("body").append("div")
                .attr("id", "videoframe")
                .append("video")
                .attr("width", v.w)
                .attr("height", v.h)
                .attr("style", "opacity:0.7")
                .attr("autoplay", "true")
                .append("source")
                .attr("src", url);
        }
    }
}

function windowLoc(vid) {
    return "location=yes,x=" + vid.x + ",y=" + vid.y + ",width=" + vid.w + ",height=" + vid.h;
}

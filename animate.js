
var SOUNDFILES = {
    "head": "2017-02-23-01birds.mp3",     
    "rear": "2017-02-23-02birds.mp3",     
    "lear": "2017-02-23-03FrogPlane-Birds.mp3",
    "neck": "2017-02-23-04FrogPlane-Birds-Long.mp3",
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

var sounds = {};

for( var i in SOUNDFILES ) {
    sounds[i] = new Audio("Sounds/" + SOUNDFILES[i]);
    console.log("Loaded " + SOUNDFILES[i]);
}



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
    .on("mouseout", handleMouseOut)
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
}

function handleMouseOver(d) {
    var s = sounds[d.id];
    console.log("Got sound " + s);
    s.play();
}

function handleMouseOut(d) {
    console.log("mouseout");
}

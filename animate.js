
var width = 1920,
    height = 1000;

var GRAVITY_K = 0.01;


var sounds = {};

for( var id in SOUNDFILES ) {
    sounds[id] = [];
    for( var sf in SOUNDFILES[id] ) {
        sounds[id].push(new Audio("media/" + SOUNDFILES[id][sf]));
    }
}

console.log(sounds);

// this dict is used to keep track of which windows have been opened
// if a video is open, don't open it again

var video_playing = {};




var cont = d3.select("div#main")
    .append("div")
    .classed("svg-container", true);

var svg = cont.append("svg")
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", `0 0 ${width} ${height}`)
   .classed("svg-content-responsive", true);

var simulation = d3.forceSimulation()
    .force("links", d3.forceLink().id(function(d) { return d.id }))
    .force("charge", d3.forceManyBody());

if( FORCES.gravity_on ) {
    simulation.force("gravity", d3.forceY(height));
}

simulation.velocityDecay(FORCES.vdecay);
simulation.nodes(MODEL.nodes);

simulation.force("links")
    .links(MODEL.links);

simulation.force("links")
    .distance(function(d) { return d.length * FORCES.scale })
    .iterations(FORCES.iterations);

if( FORCES.link ) {
    simulation.force("links").strength(FORCES.link);
}

simulation.force("charge").strength(-FORCES.charge);

if( FORCES.gravity_on ) {
    simulation.force("gravity").strength(FORCES.gravity * GRAVITY_K);
}

var link = svg.selectAll(".link")
    .data(MODEL.links)
    .enter().append("line")
    .attr("class", "limb");

var node = svg.selectAll(".node")
    .data(MODEL.nodes)
    .enter().append("circle")
    .attr("class", "joint")
    .attr("r", NODE_R)
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

    node.attr("cx", function(d) { return d.x = Math.max(NODE_R, Math.min(width - NODE_R, d.x)) })
        .attr("cy", function(d) { return d.y = Math.max(NODE_R, Math.min(height - NODE_R, d.y)) });

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
        var coords = d3.mouse(this);
        showVideo(d.id, coords);
    }
}

function handleMouseOver(d) {
    if( d.id in sounds ) {
        var s = choose(sounds[d.id]);
        s.play();
    }
}



// see http://stackoverflow.com/questions/2741493/detect-when-an-html5-video-finishes for triggering an action when a video stops playing

function showVideo(id, coords) {
    for (var sid in sounds) {
        for( var s in sounds[sid] ) {
            sounds[sid][s].pause();
        }
    }
    if( id in VIDEOS ) {
        if( ! ( id in video_playing ) ) {
            var v = choose(VIDEOS[id]);
            var url = 'media/' + v;
            console.log("Adding video element at " + coords);
            var g = svg.append("g")
                .attr("class", "videoframe")
                .attr("id", "video" + id)
                .attr("transform", video_transform(coords[0], coords[1]))
                .append("foreignObject")
                .attr("width", VWIDTH + 4)
                .attr("height", VHEIGHT + 4)
                .append("xhtml:video")
                .attr("width", VWIDTH)
                .attr("height", VHEIGHT)
                .attr("style", `opacity:${VOPACITY}`)
                .attr("autoplay", "true")
                .on("ended", function (e) { hideVideo(id) })
                .append("source")
                .attr("src", url);
        }
    }
}

//               .attr("style", video_style(coords[0], coords[1]))

function hideVideo(id) {
    d3.select("#video" + id).remove();
}



function video_style(ex, ey) {
    // var x = Math.floor(ex - VWIDTH / 2);
    // var y = Math.floor(ey - VHEIGHT / 2);
    var x = Math.floor(ex);
    var y = Math.floor(ey);
    return `left:${x}px;top:${y}px;width:${VWIDTH + 2}px;height:${VHEIGHT + 2}px`;
}

function video_transform(ex, ey) {
    var x = Math.floor(ex - VWIDTH / 2);
    var y = Math.floor(ey - VHEIGHT / 2);

    return `translate(${x},${y})`;
}

function choose(arr) {
    console.log("Choose from " + arr)
    var i = Math.floor(Math.random() * arr.length);
    console.log("i = " + i);
    console.log("choice = " + arr[i]);
    return arr[i];
}

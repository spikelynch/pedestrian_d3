
var width = 1920,
    height = 1000,
    radius = 5,
    downg = 1;


var sounds = {};

for( var i in SOUNDFILES ) {
    sounds[i] = new Audio("media/" + SOUNDFILES[i]);
}

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
//    .force("gravity", d3.forceY(height));

simulation.velocityDecay(0.1);
simulation.nodes(MODEL.nodes);

simulation.force("links")
    .links(MODEL.links);

simulation.force("links").distance(function(d) { return d.length });
simulation.force("charge").strength(-100);

//simulation.force("gravity").strength(0.015);

var link = svg.selectAll(".link")
    .data(MODEL.links)
    .enter().append("line")
    .attr("class", "limb");

var node = svg.selectAll(".node")
    .data(MODEL.nodes)
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
        var coords = d3.mouse(this);
        showVideo(d.id, coords);
    }   
}

function handleMouseOver(d) {
    if( d.id in sounds ) {
        var s = sounds[d.id];
        s.play();
    }
}



// see http://stackoverflow.com/questions/2741493/detect-when-an-html5-video-finishes for triggering an action when a video stops playing

function showVideo(id, coords) {
    for (var sid in sounds) {
        console.log(sounds[sid]);
        sounds[sid].pause();
    }
    if( id in VIDEOS ) {
        if( ! ( id in video_playing ) ) {
            var v = VIDEOS[id];
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
            video_playing[id] = true;
        }
    }
}

//               .attr("style", video_style(coords[0], coords[1]))

function hideVideo(id) {
    d3.select("#video" + id).remove();
    delete video_playing[id];
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

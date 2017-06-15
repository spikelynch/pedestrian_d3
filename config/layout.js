// Pedestrian_d3 configuration

// Parameters for the force-spring layout

var NODE_R = 5;

var FORCES = {

    // charge: controls how strongly the nodes repel one another

    "charge": 10,

    // gravity_on: set to true for gravity, false for no gravity

    "gravity_on": true,

    // gravity: controls the gravity strength

    "gravity": 1,

    // vdecay: higher values = more viscosity. too low = the simulation
    // goes a bit haywire

    "vdecay": .4,

    // iterations: higher values make the puppet more rigid

    "iterations": 5,

    // scale: all of the link distances are multiplied by this

    "scale": 1,

    // link: how strongly links attract one another - set this to 'false' for
    // 'puppet classic'

    "link": false,



};



// MODEL = make_layout([SHAPES['pedestrian'], SHAPES['wand']]);

var shapes = [];

for( i = 0; i < 100; i++ ) {
    shapes.push(SHAPES['pedestrian']);
//    shapes.push(SHAPES['wand']);
}

MODEL = make_layout(shapes);

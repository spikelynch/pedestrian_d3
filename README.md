The Pedestrian d3
=================

## Contents

    README.md
    animate.js
    config/
        layout.js
        media.js
    index.html
    media/
        [.. video and sound files ..]
    style.css

## Customisation

### config/layout.js

Configuration for the d3 simulation which drives the Pedestrian, and
the Pedestrian's shape and size.

### config/media.js

Configures which sound and video clips are triggered by which parts of
the Pedestrian.

Media files should be in the media/ directory.

### style.css

Configures most of the colour and styling of the visualisation. The
size of the Pedestrian's nodes is in config/layout.js for annoying
technical reasons (as NODE_R).

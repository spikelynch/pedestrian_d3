pedestrian = { "nodes": [
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

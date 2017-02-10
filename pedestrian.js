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
        { "source": "head", "target": "neck", "value": 30 },
        { "source": "head", "target": "rear", "value": 20 },
        { "source": "head", "target": "lear", "value": 20 },
        { "source": "rear", "target": "lear", "value": 30 },
        { "source": "neck", "target": "rear", "value": 20 },
        { "source": "neck", "target": "lear", "value": 20 },

        { "source": "neck", "target": "rshoulder", "value": 30 },
        { "source": "rshoulder", "target": "relbow", "value": 50 },
        { "source": "relbow", "target": "rhand", "value": 50 },

        { "source": "neck", "target": "lshoulder", "value": 30 },
        { "source": "lshoulder", "target": "lelbow", "value": 50 },
        { "source": "lelbow", "target": "lhand", "value": 50 },

        { "source": "neck", "target": "heart", "value": 30 },
        { "source": "heart", "target": "rhip", "value": 50 },
        { "source": "heart", "target": "lhip", "value": 50 },

        { "source": "rshoulder", "target": "groin", "value": 60 },
        { "source": "lshoulder", "target": "groin", "value": 60 },
        { "source": "groin", "target": "rhip", "value": 30 },
        { "source": "groin", "target": "lhip", "value": 30 },

        { "source": "rhip", "target": "rknee", "value": 50 },
        { "source": "rknee", "target": "rfoot", "value": 50 },

        { "source": "lhip", "target": "lknee", "value": 50 },
        { "source": "lknee", "target": "lfoot", "value": 50 },
    ]
             };

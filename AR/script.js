var vrView;

// All the scenes for the experience
var scenes = {
  dolphins: {
    image: 'dolphins.jpg',
    preview: 'dolphins-preview.jpg',
    hotspots: {
      whaleRight: {
        pitch: 0,
        yaw: 110,
        radius: 0.05,
        distance: 1
      },
      whaleLeft: {
        pitch: 0,
        yaw: 150,
        radius: 0.05,
        distance: 1
      },
      walrus: {
        pitch: 0,
        yaw: 170,
        radius: 0.05,
        distance: 1
      }
    }
  },
  whaleLeft: {
    image: 'whale-left.jpg',
    preview: 'whale-left-preview.jpg',
    hotspots: {
      whaleRight: {
        pitch: 0,
        yaw: 125,
        radius: 0.05,
        distance: 1
      },
      dolphins: {
        pitch: 0,
        yaw: 110,
        radius: 0.05,
        distance: 1
      },
      walrus: {
        pitch: 0,
        yaw: 30,
        radius: 0.05,
        distance: 1
      }
    }
  },
  whaleRight: {
    image: 'whale-right.jpg',
    preview: 'whale-right-preview.jpg',
    hotspots: {
      dolphins: {
        pitch: 0,
        yaw: 305,
        radius: 0.05,
        distance: 1
      },
      whaleLeft: {
        pitch: 0,
        yaw: 180,
        radius: 0.05,
        distance: 1
      },
      walrus: {
        pitch: 0,
        yaw: 210,
        radius: 0.05,
        distance: 1
      }
    }
  },
  walrus: {
    image: 'walrus.jpg',
    preview: 'walrus-preview.jpg',
    hotspots: {
      whaleLeft: {
        pitch: 0,
        yaw: 20,
        radius: 0.05,
        distance: 1
      },
      whaleRight: {
        pitch: 0,
        yaw: 340,
        radius: 0.05,
        distance: 1
      },
      dolphins: {
        pitch: 0,
        yaw: 320,
        radius: 0.05,
        distance: 1
      }
    }
  }
};

function onLoad() {
  vrView = new VRView.Player('#vrview', {
	width:'100%',
	height:'100%',	  
    image: 'blank.png',
    preview: 'blank.png',
    is_stereo: true,
    is_autopan_off: true
  });

  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('click', onHotspotClick);
  vrView.on('error', onVRViewError);
  vrView.on('getposition', onGetPosition);
}

function onVRViewReady(e) {
  console.log('onVRViewReady');
  loadScene('walrus');
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function onGetPosition(e) {
  console.log(e);

}

function onHotspotClick(e) {
  vrView.getPosition()
  console.log('onHotspotClick', e.id);
  if (e.id) {
    loadScene(e.id);
  }
}

function loadScene(id) {
  console.log('loadScene', id);

  // Set the image
  vrView.setContent({
    image: scenes[id].image,
    preview: scenes[id].preview,
    is_stereo: true,
    is_autopan_off: true
  });

  // Add all the hotspots for the scene
  var newScene = scenes[id];
  var sceneHotspots = Object.keys(newScene.hotspots);
  for (var i = 0; i < sceneHotspots.length; i++) {
    var hotspotKey = sceneHotspots[i];
    var hotspot = newScene.hotspots[hotspotKey];

    vrView.addHotspot(hotspotKey, {
      pitch: hotspot.pitch,
      yaw: hotspot.yaw,
      radius: hotspot.radius,
      distance: hotspot.distance
    });
  }
}

function onVRViewError(e) {
  console.log('Error! %s', e.message);
}

window.addEventListener('load', onLoad);
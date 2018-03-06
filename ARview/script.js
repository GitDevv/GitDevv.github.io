var vrView;
 
function onLoad() {
  vrView = new VRView.Player('#vrview', {
	width:'100%',
	height:480,
    image: 'walrus.jpg',
    preview: 'walrus-preview.jpg',
    is_stereo: true,
    is_autopan_off: true
  });

  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('error', onVRViewError);
}

function onVRViewReady(e) {
  console.log('onVRViewReady');
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function onVRViewError(e) {
  console.log('Error! %s', e.message);
}

window.addEventListener('load', onLoad);
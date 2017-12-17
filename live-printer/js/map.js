	var myMap = null;
ymaps.ready(function () {
    
    
     myMap = new ymaps.Map('map', {
    center:[59.88858433707189,30.32228317809154],
            scroll: false,
            zoom: 16
    }, {
     
    }),
    myPlacemark = new ymaps.Placemark([59.887710564259855,30.322479499999993], {
//		hintContent: 'СѓР». РџРµС‚СЂРѕРІСЃРєР°СЏ, 50/2',
//		balloonContent: 'СѓР». РџРµС‚СЂРѕРІСЃРєР°СЏ, 50/2'
    }, {
		iconLayout: 'default#image',
		iconImageHref: 'images/contacts/pin.png' ,
		iconImageSize: [20, 28],
		iconImageOffset: [-30, -70]  		 
    });
	
    	myMap.behaviors.disable('scrollZoom');				

    myMap.geoObjects.add(myPlacemark);

 
	
	
//myMap.panTo([52.029023, 113.496718]).then(function () {
//       myPlacemark.balloon.open(); //
//});	
//	
 
 
 
}); 

//function setBounds1 () { myMap.setCenter([59.945431564158966,30.254243499999973]); }

 
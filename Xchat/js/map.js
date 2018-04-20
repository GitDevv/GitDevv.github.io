	var myMap = null;
ymaps.ready(function () {
    
    
     myMap = new ymaps.Map('map', {
    center:[53.90360457067275,27.54378399999999],
            scroll: false,
            zoom: 18
    }, {
     
    }),
    myPlacemark = new ymaps.Placemark([53.90360457067275,27.54378399999999], {
		hintContent: ' ',
		balloonContent: ' '
    }, {
		iconLayout: 'default#image',
		iconImageHref: 'img/label.png' ,
		iconImageSize: [57, 80],		 
    });
	
    	myMap.behaviors.disable('scrollZoom');				

    myMap.geoObjects.add(myPlacemark);

 
 
 
 
 
}); 

 
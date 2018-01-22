	var myMap = null;
ymaps.ready(function () {
    
    
     myMap = new ymaps.Map('map', {
    center:[55.75134636531442,37.99887630688471],
            scroll: false,
            zoom: 16
    }, {
     
    }),
    myPlacemark = new ymaps.Placemark([55.75134636531442,37.99887630688471], {
		hintContent: 'Моск. обл., г. Железнодорожный, ул. Октябрьская, д. 33',
		balloonContent: 'Моск. обл., г. Железнодорожный, ул. Октябрьская, д. 33'
    }, {
		iconLayout: 'default#image',
		iconImageHref: 'img/label.svg' ,
		iconImageSize: [148, 170],
		iconImageOffset: [-20, -70]  		 
    });
	
    	myMap.behaviors.disable('scrollZoom');				

    myMap.geoObjects.add(myPlacemark);

 
 
 
 
 
}); 

 
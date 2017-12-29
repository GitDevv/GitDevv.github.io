	var myMap = null;
ymaps.ready(function () {
    
    
     myMap = new ymaps.Map('map', {
    center:[44.579107679515765,33.473945260574325],
            scroll: false,
            zoom: 17
    }, {
     
    }),
    myPlacemark = new ymaps.Placemark([44.579107679515765,33.473945260574325], {
		hintContent: 'г. Севастополь, Фиолентовское шосссе, 6 авторынок Стрелецкий, ряд & место $%',
		balloonContent: 'г. Севастополь, Фиолентовское шосссе, 6 авторынок Стрелецкий, ряд & место $%'
    }, {
		iconLayout: 'default#image',
		iconImageHref: 'img/label.png' ,
		iconImageSize: [115, 117],
		iconImageOffset: [-80, -90]  		 
    });
	
    	myMap.behaviors.disable('scrollZoom');				

    myMap.geoObjects.add(myPlacemark);

 
 
 
 
 
}); 

 
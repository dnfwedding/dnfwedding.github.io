(function yandexMap() {
    ymaps.ready(init);
    var yMap;

    function init(){
        yMap = new ymaps.Map('map', {
            center: [59.9338318, 30.294362],
            zoom: 16
        });
        var mark = new ymaps.Placemark(
            [59.934148, 30.294086],
            {hintContent: 'ZAGS #1', balloonContent: 'Registration will be here! ^_^'}
        );
        yMap.geoObjects.add(mark);
    }
})();

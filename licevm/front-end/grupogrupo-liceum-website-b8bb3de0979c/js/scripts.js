function entrar() {
	window.prompt("Usuário: ");
}

var slideIndex = 0;
window.onload = showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Alterar imagem a cada 5 segundos
}





var timeline;
var data;

// Called when the Visualization API is loaded.
function drawVisualization() {
    // Create a JSON data table
    data = [
        {
            'start': new Date(2010,7,23),
            'content': 'Item 1<br><img src="img/comments-icon.png" style="width:32px; height:32px;">'
        },
        {
            'start': new Date(2010,7,23,23,0,0),
            'content': 'Item 2<br><img src="img/mail-icon.png" style="width:32px; height:32px;">'
        },
        {
            'start': new Date(2010,7,24,16,0,0),
            'content': 'Report'
        },
        {
            'start': new Date(2010,7,26),
            'end': new Date(2010,8,2),
            'content': 'Traject A'
        },
        {
            'start': new Date(2010,7,28),
            'content': 'Item 3<br><img src="img/notes-edit-icon.png" style="width:48px; height:48px;">'
        },
        {
            'start': new Date(2010,7,31),
            'end': new Date(2010,8,3),
            'content': 'Traject B'
        },
        {
            'start': new Date(2010,8,4,12,0,0),
            'content': 'Report<br><img src="img/attachment-icon.png" style="width:32px; height:32px;">'
        },
        {
            'start': new Date(2012,8,4,12,0,0),
            'content': 'Youtube<br><img src="../imgs/" style="width:32px; height:32px;">',
            "apiVersion": "2.0",
            "data": {
                "updated":"2010-01-07T19:58:42.949Z",
                "totalItems":800,
                "startIndex":1,
                "itemsPerPage":1,
                "items": [
                    {"id":"hYB0mn5zh2c",
                     "uploaded":"2007-06-05T22:07:03.000Z",
                     "updated":"2010-01-07T13:26:50.000Z",
                     "uploader":"GoogleDeveloperDay",
                     "category":"News",
                     "title":"Google Developers Day US - Maps API Introduction",
                     "description":"Google Maps API Introduction ...",
                     "tags":[
                        "GDD07","GDD07US","Maps"
                     ],
                     "thumbnail":{
                        "default":"http://i.ytimg.com/vi/hYB0mn5zh2c/default.jpg",
                        "hqDefault":"http://i.ytimg.com/vi/hYB0mn5zh2c/hqdefault.jpg"
                     },
                     "player":{
                        "default":"http://www.youtube.com/watch?vu003dhYB0mn5zh2c"
                     },
                     "content":{
                        "1":"rtsp://v5.cache3.c.youtube.com/CiILENy.../0/0/0/video.3gp",
                        "5":"http://www.youtube.com/v/hYB0mn5zh2c?f...",
                        "6":"rtsp://v1.cache1.c.youtube.com/CiILENy.../0/0/0/video.3gp"
                     },
                     "duration":2840,
                     "aspectRatio":"widescreen",
                     "rating":4.63,
                     "ratingCount":68,
                     "viewCount":220101,
                     "favoriteCount":201,
                     "commentCount":22,
                     "status":{
                        "value":"restricted",
                        "reason":"limitedSyndication"
                     },
                     "accessControl":{
                        "syndicate":"allowed",
                        "commentVote":"allowed",
                        "rate":"allowed",
                        "list":"allowed",
                        "comment":"allowed",
                        "embed":"allowed",
                        "videoRespond":"moderated"
                     }
                    }
                ]
             }
        }
    ];

    // specify options
    var options = {
        'width':  '100%',
        'height': '300px',
        'editable': true,   // enable dragging and editing events
        'style': 'box'
    };

    // Instantiate our timeline object.
    timeline = new links.Timeline(document.getElementById('mytimeline'), options);

    function onRangeChanged(properties) {
        document.getElementById('info').innerHTML += 'rangechanged ' +
                properties.start + ' - ' + properties.end + '<br>';
    }

    // attach an event listener using the links events handler
    links.events.addListener(timeline, 'rangechanged', onRangeChanged);

    // Draw our timeline with the created data and options
    timeline.draw(data);
}
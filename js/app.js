//
//
//
var app = {
    version : '1.0.0',

    //
    onDOMContentLoaded : function () {
        document.getElementById('originalImage').src = 'img/dad+benny.jpg';
        document.getElementById('test').innerHTML    = 'app.onDOMContentLoaded';

        alert("onDOMContentLoaded");
    }
};

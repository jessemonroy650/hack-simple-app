//
//
//
var app = {
    version : '1.0.0',

    //
    onDOMContentLoaded : function () {
        alert("onDOMContentLoaded");
        document.getElementById('originalImage').src = 'img/dad+benny.jpg';
        document.getElementById('test').innerHTML    = 'app.onDOMContentLoaded';

        alert("just after last statement in `onDOMContentLoaded`");
    }
};

$(document).ready(function(){
    var nav = $("#menu");

    $("#btn").click(
        function(){       
            nav.toggleClass("show");
            //     nav.css({
            //     "width": "auto",
            //     "height": "auto",
            //     "padding": "20px",
            //     "padding-top": "27px"
            // })
    });  
});
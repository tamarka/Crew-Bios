/**
 * Created by tamar on 07-Dec-15.
 */
/*Function for rendering different size images*/
$(document).ready(function() {
function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

for (var i = 0; i <8; i++) {
    var dir="~/../images/bios/";
    var extention=".jpg"
    var width = getRandomSize(282, 585);
    var height =  282;
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //List all .png file names in the page
            $(data).find("a:contains(" + extention + ")").each(function () {
                var filename = this.href.replace(window.location.host, "").replace("http://localhost", "");
                $("ul#photos").append("<img src='" + dir + filename + "'>");
            });
        }
    });

}
});

/*Scrolling*/
$(function() {
    $.scrollify({
        section : "section",
    });
});
$.scrollify({
    section : "section",
    sectionName : "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 800,
    offset : 0,
    scrollbars: true,
    before:function() {},
    after:function() {},
    afterResize:function() {}
});

/*Animation part*/
$(document).ready(function(){
    $.doTimeout(2500, function(){
        $('.repeat.go').removeClass('go');

        return true;
    });
    $.doTimeout(2520, function(){
        $('.repeat').addClass('go');
        return true;
    });

});
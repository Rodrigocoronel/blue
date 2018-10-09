  $.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {
        
    },
    after:function() {
        let liga = window.location.href
        let char = liga.indexOf('#');
        let ref = liga.substring(char);

        if(ref == '#home')
            $('.navbar').addClass('d-none');
        else 
            $('.navbar').removeClass('d-none');

    },
    afterResize:function() {},
    afterRender:function() {}
  });

$(function() {
    $( ".btn" ).click(function() {
       $.scrollify.move(this.name);
    });
});

$(function(){
    
});


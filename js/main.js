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
        let element = null;

        if(ref == '#home')
            $('.navbar').addClass('d-none');
        else 
            $('.navbar').removeClass('d-none');

        element1 = document.getElementById('navHome')
        element2 = document.getElementById('navOrgullo')
        element3 = document.getElementById('navHistoria')
        element4 = document.getElementById('navNoticias')
        element5 = document.getElementById('navContacto')

        $(element1).removeClass('menuActual')
        $(element2).removeClass('menuActual')
        $(element3).removeClass('menuActual')
        $(element4).removeClass('menuActual')
        $(element5).removeClass('menuActual')

        switch(ref){
            case '#home':
                $(element1).addClass('menuActual')
                break;
            case '#orgulloAzul':
                $(element2).addClass('menuActual')
                break;
            case '#historia':
                 $(element3).addClass('menuActual')
                break;
            case '#noticias':
                $(element4).addClass('menuActual')
                break;
            case '#contacto':
                $(element5).addClass('menuActual')
                break;
        }

    },
    afterResize:function() {},
    afterRender:function() {}
  });

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

$(function() {
    $( ".btn" ).click(function() {
       $.scrollify.move(this.name);
    });
});

$( document ).ready(function() {
    if(isMobileDevice()){
        $.scrollify.disable();
    }else{
        $.scrollify.enable();
    }
});



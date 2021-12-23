var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    //counter
    /*(function($){
        "use strict";
        function count($this){
            var current = parseInt($this.html(), 10);
            current = current + 1; /* where 50 is increment */
            /*$this.html(++current);
            if (current > $this.data('count')) {
                $this.html($this.data('count'));
            }
            else{
                setTimeout(function(){
                    count($this)
                }, 50);
            }
        }
        $(".stat-count").each(function(){
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
        });
    })(jQuerry);*/

    $('.stat-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


const num = document.querySelector(".a");
let counter = 0;
setInterval(() => {
  if(counter == 87 ){
    clearInterval();
  }else{
    counter+=1;
    num.textContent = counter + "%";
  }
}, 10);


const num1 = document.querySelector(".b");
let counter1 = 0;
setInterval(() => {
  if(counter1 == 75 ){
    clearInterval();
  }else{
    counter1+=1;
    num1.textContent = counter1 + "%";
  }
}, 10);

const num2 = document.querySelector(".c");
let counter2 = 0;
setInterval(() => {
  if(counter2 == 90 ){
    clearInterval();
  }else{
    counter2+=1;
    num2.textContent = counter2 + "%";
  }
}, 10);


// smooth scroll

$(document).ready(function(){
    $('.menu a').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});


// fixed header
//$(document).ready(function({}))
/*jQuerry(window).scroll(function(){
    if (jQuerry(window).scrollTop() >= 10) {
        jQuerry('#home').addClass('fixed-header');
    }
    else{
        jQuerry('#home').removeClass('fixed-header');
    }
});*/


//fixed header

 /*window.onscroll = function() {
      setSticky();
   };
   var header = document.querySelector(".home");
   var sticky = header.offsetTop;
   function setSticky() {
      if (window.pageYOffset > sticky) {
         header.classList.add("sticky");
      }
      else {
         header.classList.remove("sticky");
      }
   }*/
// scroll to top

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $("#arrow i").fadeIn();
        }
        else{
            $("#arrow i").fadeOut();
            }
    });
    $("#arrow i").on('click',function(){
        $("html,body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

   
// progress bar 

$(document).ready(function ($){
    function animateElements(){
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    // start_angle: -math.pi/2,
                    value: percent / 100,
                    size: 400,
                    thickness: 15,
                    fill: {
                        color: '#f47a14'
                    }
                }).on('circle-animate-progress', function(event, progress, stepValue){
                    $(this).find('strong').text((stepValue*100).toFixed(0) + "%");
                }).stop();
            }
        });
    }
    animateElements();
    $(window).scroll(animateElements);
});


//accordion

//$("#faq-accordion").accordion({
  //  collapsible : true,
    //active : 0,
    //heightStyle: "true",
    //icons : {header:"ui-icon-plus", activeheader:"ui-icon-minus"}
//});


/*
$(document).ready(function() {
         $("#faq-accordion").accordion();
        });*/

// owl courasel slider
//$('.owl-carousel').owlCarousel({
  //  loop:true,
  //  margin:10,

    //dots: true,
    //autoplay: true,
    //autoplayTimeout:2500,
    //responsive:{
      //  0:{
        //    items:1
        //},
        //600:{
          //  items:3
        //},
        //1000:{
          //  items:4
        //}
    //}
//})

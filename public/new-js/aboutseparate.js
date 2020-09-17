if ( typeof WebFontConfig === "undefined" ) {
    WebFontConfig = new Object();
}
WebFontConfig['google'] = {families: ['Poppins:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic', 'Fira+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic']};

(function() {
    var wf = document.createElement( 'script' );
    wf.src = '../../../ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName( 'script' )[0];
    s.parentNode.insertBefore( wf, s );
})();

window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/promo-theme.com\/luxa\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.3.4"}};
!function(e,a,t){var r,n,o,i,p=a.createElement("canvas"),s=p.getContext&&p.getContext("2d");function c(e,t){var a=String.fromCharCode;s.clearRect(0,0,p.width,p.height),s.fillText(a.apply(this,e),0,0);var r=p.toDataURL();return s.clearRect(0,0,p.width,p.height),s.fillText(a.apply(this,t),0,0),r===p.toDataURL()}function l(e){if(!s||!s.fillText)return!1;switch(s.textBaseline="top",s.font="600 32px Arial",e){case"flag":return!c([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])&&(!c([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!c([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]));case"emoji":return!c([55357,56424,55356,57342,8205,55358,56605,8205,55357,56424,55356,57340],[55357,56424,55356,57342,8203,55358,56605,8203,55357,56424,55356,57340])}return!1}function d(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(i=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},o=0;o<i.length;o++)t.supports[i[o]]=l(i[o]),t.supports.everything=t.supports.everything&&t.supports[i[o]],"flag"!==i[o]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[i[o]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(r=t.source||{}).concatemoji?d(r.concatemoji):r.wpemoji&&r.twemoji&&(d(r.twemoji),d(r.wpemoji)))}(window,document,window._wpemojiSettings);

var wc_add_to_cart_params = {"ajax_url":"\/luxa\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/luxa\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/promo-theme.com\/luxa\/cart\/","is_cart":"","cart_redirect_after_add":"no"};
var zilla_likes = {"ajaxurl":"https:\/\/promo-theme.com\/luxa\/wp-admin\/admin-ajax.php"};
var cli_flush_cache = true;
var c = document.body.className;
c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
document.body.className = c;
var wpcf7 = {"apiSettings":{"root":"https:\/\/promo-theme.com\/luxa\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"cached":"1"};
var woocommerce_params = {"ajax_url":"\/luxa\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/luxa\/?wc-ajax=%%endpoint%%"};
var wc_cart_fragments_params = {"ajax_url":"\/luxa\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/luxa\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_0b22aad90e48dcbe6ac323f5cdf1f847","fragment_name":"wc_fragments_0b22aad90e48dcbe6ac323f5cdf1f847","request_timeout":"5000"};
var yprm_ajax = {"url":"https:\/\/promo-theme.com\/luxa\/wp-admin\/admin-ajax.php"};

jQuery(document).ready(function (jQuery) {
    control_video(jQuery('.banner-area-5c9cadf8f745e').find('.video'), 'play');
  });
jQuery(document).ready(function (jQuery) {
    jQuery('.vertical-tabs-5c9381c4295a1').pt_tabs()
  });
jQuery(document).ready(function (jQuery) {
    jQuery('.testimonials-items-5c921a5b1d93d').each(function () {
    var $this = jQuery(this);

    if ($this.find('.item').length > 1) {
      $this.addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        navClass: ['owl-prev free-basic-ui-elements-left-arrow', 'owl-next free-basic-ui-elements-right-arrow'],
        smartSpeed: 800,
        autoplayHoverPause: true,
        navText: false,
        margin: 30,
        responsive: {
          0: { items: 1 }
        }
      });
    }

    $this.on('click', '.owl-prev', function () {
      $this.trigger('prev.owl.carousel');
    }).on('click', '.owl-next', function () {
      $this.trigger('next.owl.carousel');
    });
  });
  });
jQuery(document).ready(function (jQuery) {
    jQuery('.team-carousel-5c938618203d9').each(function () {
    var $this = jQuery(this);

    if ($this.find('.team-item').length > 1) {
      $this.addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        navClass: ['owl-prev free-basic-ui-elements-left-arrow', 'owl-next free-basic-ui-elements-right-arrow'],
        navText: false,
        margin: 1,
        responsive: {
          0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 4 }, 1200: { items: 5 },
        }
      });
    }
  });
  });
jQuery(document).ready(function (jQuery) {
    jQuery('.brand-block-5c9229f8c78b9').each(function () {
    var $this = jQuery(this);

    if ($this.find('.brand-item').length > 1) {
      $this.addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        navText: false,
        responsive: {
          0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 4 }, 1200: { items: 5 },
        }
      });
    }
  });
  });
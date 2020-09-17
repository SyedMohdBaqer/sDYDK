
                            /* You can add more configuration options to webfontloader by previously defining the WebFontConfig with your options */
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
            jQuery('#map-5ca2fd861224f').each(function () {
              function initialize() {
                var myLatlng = new google.maps.LatLng(51.5237817, -0.15843700000005);
                var mapOptions = {
                  zoom: 16,
                  center: myLatlng,
                  disableDefaultUI: true,
                  scrollwheel: false,
                  mapTypeId: google.maps.MapTypeId.ROADMAP,
                  styles: [{
                    'featureType': 'all',
                    'elementType': 'all',
                    'stylers': [{
                      'saturation': -100
                    }, {
                      'gamma': .5
                    }]
                  }]
                }
                var map = new google.maps.Map(document.getElementById('map-5ca2fd861224f'), mapOptions);
            
                var myLatLng = new google.maps.LatLng(51.5237817, -0.15843700000005);
                var beachMarker = new google.maps.Marker({
                  position: myLatLng,
                  map: map
                });
                google.maps.event.addDomListener(window, 'resize', function () {
                  var center = map.getCenter();
                  google.maps.event.trigger(map, 'resize');
                  map.setCenter(center);
                });
              }
              google.maps.event.addDomListener(window, 'load', initialize);
            });
          });
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^/]+\1\.\.\1/,d=("./"+a).replace(/[^/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},"function"==typeof define?define("src/source/js/template/template",[],function(){return a}):"undefined"!=typeof exports?module.exports=a:this.template=a,a("404","404"),a("demo",function(a,b){"use strict";var c=this,d=(c.$helpers,c.$each),e=a.postList,f=(a.$value,a.$index,c.$escape),g=function(d,e){e=e||a;var f=c.$include(d,e,b);return h+=f},h="";return h+='<section class="plugin_nav"> <ul> <li> <a href="javascript:;" id="J_scroll" class="superNav on">IScroll</a> </li> <li> <a href="javascript:;" id="J_swipe" class="superNav">Swipe</a> </li> </ul> </section> <section class="plugin_content" id="wrapper"> <section class="plugin_iscroll suberCon on"> ',d(e,function(a){h+=" <p>",h+=f(a),h+="</p> "}),h+=" </section> <section class=\"swipe_wrap swipe suberCon\" id='mySwipe' style='max-width:300px;margin:0 auto;'> <div class='swipe-wrap'> <div><b>0</b></div> <div><b>1</b></div> <div><b>2</b></div> <div><b>3</b></div> <div><b>4</b></div> <div><b>5</b></div> <div><b>6</b></div> <div><b>7</b></div> <div><b>8</b></div> <div><b>9</b></div> <div><b>10</b></div> <div><b>11</b></div> <div><b>12</b></div> <div><b>13</b></div> <div><b>14</b></div> <div><b>15</b></div> <div><b>16</b></div> <div><b>17</b></div> <div><b>18</b></div> <div><b>19</b></div> <div><b>20</b></div> </div> </section> </section> ",g("./public/footer"),new k(h)}),a("dialog",function(a,b){"use strict";var c=this,d=(c.$helpers,function(d,f){f=f||a;var g=c.$include(d,f,b);return e+=g}),e="";return e+='<button id="dialog1" class="demo_btn">lay id</button> <button id="dialog2" class="demo_btn">pushHtml</button>  <div class="overlay" id="J_overlay1"> <section class="modal modal_tips"> tips1 </section> </div>  ',d("./public/footer"),new k(e)}),a("lazyload",function(a,b){"use strict";var c=this,d=(c.$helpers,function(d,f){f=f||a;var g=c.$include(d,f,b);return e+=g}),e="";return e+='<div class="demo_lazyload"> <ul> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/nature/1/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/nature/2/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/nature/3/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/nature/4/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/nature/5/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/nature/6/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/nature/7/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/nature/8/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/nature/9/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/technics/1/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/technics/2/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/technics/3/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/technics/4/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/technics/5/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/technics/6/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/technics/7/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/technics/8/"> </li> <li> <img class="lazy" width= "240" height="120" src="http://static.vas.pptv.com/vas/assets/app/1717wan/wap/v_20140806142433/css/gb/lazypic.jpg" lazyimg="http://lorempixel.com/400/200/technics/9/"> </li> </ul> </div> ',d("./public/footer"),e+=" ",new k(e)}),a("public/footer",'<footer class="demo_footer" id="J_demoFooter"> <ul> <li> <a href="#/plugin">plugin</a> </li> <li> <a href="#/dialog">dialog</a> </li> <li> <a href="#/lazyload">lazyload</a> </li> </ul> </footer>')}();
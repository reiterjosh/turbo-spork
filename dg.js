if(counter)throw counter.init(),"resetting";var c={uttStart:parseInt(localStorage.getItem($(".page-title").text())),count:0,prevType:null,init:function(){document.addEventListener("mousedown",c.incr),document.addEventListener("mousemove",c.incr),document.addEventListener("keyup",c.incr),document.addEventListener("scroll",c.incr)},incr:function(e){"mousemove"===e.type&&"mousemove"===c.prevType||"scroll"===e.type&&"scroll"===c.prevType||e.which&&(c.count+=1,c.prevType=e.type)},print:function(){var e=parseInt(localStorage.getItem($(".page-title").text()))-this.uttStart;console.log(this.count+" user actions"),console.log(e+" utterances")}};function enUS(){return"en_US"===app.currentProjectLocale}function ann(e){ann.i=void 0!==ann.i?ann.i:-1,ann.active=!!ann.active&&ann.active;var t=[65,83,68,70,71].indexOf(e.keyCode),n=$(".annotation-btn"),a=$(".annotation"),i=!1;if("Enter"!==e.key||ann.active?"Shift"===e.key&&ann.active&&(i=!0):(ann.active=!0,noSelection()&&(i=!0)),i&&text.searchSelect($(".annotation")),ann.active)if(e.preventDefault(),n.removeAttr("style"),t>-1){var o=[0,5,9,12,14,15],s=["skyblue","#f9ad61","#ff6b6b","#80c48d","#d698fe"][t],c=ann.i;c=o[t]<=c&&c<o[t+1]-1?c+1:o[t],n.eq(c).css("background-color",s).css({transition:"0s"}).css("color","white"),ann.i=c}else ann.i=-1;if(!a.attr("bound")){function r(e){"Enter"===e.key&&(ann.i>-1&&(noSelection()||n.eq(ann.i).click(),n.removeAttr("style")),ann.active=!1,ann.i=-1)}a.keyup(r).blur(r),a.attr("bound","true")}}function openGuidePage(){var e=$(":hover"),t={".button.invalid:contains(telligible)":"II.+General+Conventions#languagetabs-unintelligible",".step-container:lt(2) .button.invalid":"II.+General+Conventions#languagetabs-otherhaltingconditions","#pre-itn-area .text-header":"DG%3A+Transcription+Tab#DG:TranscriptionTab-preITN","#loading, #success-msg, #error-msg":"V.+Development+Data",".annotation-btn":"VI.+Non-UD+Tags","#post-itn-area .text-header":"Portal%3A+PostITN+Guideline","#title":"Domain+Guidelines%3A+Context","#result-grade>>:first":"DG%3A+Result+Tab"};for(var n in t)if(e.filter(n).length){window.open("https://confluence.sd.apple.com/display/GUI/"+t[n],"_blank");break}}function openLingoPage(){function e(e){return e.is("select")?e.val()?e.val().trim():"":e.text().trim()}var t="https://lingo.siri.apple.com/production-en/ontology/",n=$(":hover").filter("select:contains(domain), .original-domain, .domain"),a=$(":hover").filter(".label-value, .is-payload, .form-group select");if(n.length)t+=e(n)+"/description";else{if(!a.length)return;t+=$(".domain:visible").text()+"/labels/"+(a.is(":contains(verb label)")?"verb":"parse")+"-label/"+e(a)+"/description"}window.open(t,"_blank")}function fixSpacesUd(){$(".annotation-tag").not(":contains(custom)").each(function(){$(this).text().match(/_/g)&&$(this).text($(this).text().replace(/_/g," "))})}function removeUnderscores(){fixSpacesUd();var e=$(".annotation"),t=e.text().replace(/_/g," ");t!==e.text()&&e.text(t)}function wrapTags(){$(".annotation:contains([)").html(function(e,t){return t.replace(/\[[^\]]*\]/g,'<span class="annotation-tag tag-valid">$&</span>')})}function highlightClick(e){var t=e.text()?"backgroundColor":"color";e.click().css(t,"royalblue"),setTimeout(function(){e.css(t,"")},500)}function noSelection(){return window.getSelection().focusOffset==window.getSelection().anchorOffset}function searchLocal(){var e=window.getSelection().toString().replace(/\[[^\s]* |]/g,"").replace(/\s/g,"%20"),t=$(".fa-map-marker").parent().attr("href");e&&t&&(t=t.match(/(?:=)(.*)/)[1],window.open("https://www.google.com/maps/search/"+e+"/@"+t+",10z","_blank"))}function searchItunes(){var e=window.getSelection().toString().replace(/\[[^\s]* |]/g,"").replace(/\s/g,"+");window.open("https://www.google.com/search?q=site:itunes.apple.com/us/ "+e,"_blank")}function t(){function e(){$(".paddles.grading>").removeAttr("style"),clearTimeout(t.set),t.set=!1}t.set=t.set||!1,t.cancel=e,t.set?e():(t.set=setTimeout(function(){$(".next")[0].click()},27e4),$(".paddles.grading>").css("color","lightgray").click(e))}function typing(){return $(".annotation-mousetrap, #post-itn-textbox, select").is(":focus")}function gradable(){return!$(".request-item.current").is(".ungradable")}function incomplete(){return $(".step i.fa-exclamation-triangle").length>0}function escapeRE(e){return e=(e=(e=e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).replace(/['’]/g,"['’]")).replace(/[  ]/g,"[  ]")}function clearThis(){this.removeAttribute("style")}function stepF(e){var t=[[function(){$(".key-label:contains(Options)+").is(":contains(N/A)")||$("#Followup0").is("[checked]")||($("#Followup0+").addClass("mark underline"),$(".radio-group:has(#Followup0)>").click(function(){$(".mark:visible").removeClass("mark underline")}))}],[function(){$("#title").focus(function(){document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges()})},function(){var e=$("#post-itn-textbox"),t=String.fromCharCode(160);e.blur(function(){e.text().includes(t)&&(e.text(e.text().replace(t," ")),e.focus())})},function(){context.set()},function(){$("#post-itn-area .text-header").dblclick(function(e){$(this).text("postITN Text  ° × ÷")})},function e(t=100){if("block"===$("#success-msg").css("display"))verifyUD();else{if("block"===$("#error-msg").css("display"))return;t<1e4?setTimeout(e,t,t+200):console.log("UD timed out.")}}],[],[function(){function e(){$(".incorrect.ui:visible:not(.active)").addClass("mark").click(function(){$(this).removeClass("mark"),setTimeout(function(){$("span.mark").length||$("select:visible").css("border","3px solid orange").focus().blur(clearThis)},50)})}var t=$("#wrapper:visible .content").text().toLowerCase(),n=$(".group:visible>:contains(Background)"),a=$(".group:visible>:contains(Alert)");for(dom of(enUS()&&(t.includes("stop")||t.includes("shut up"))&&(n.filter(":not(:contains([))").css("font-weight","bold").css("color","blue"),n.is(":contains([)")&&a.filter(":not(:contains([))").css("font-weight","bold").css("color","blue"),$(".original-domain:visible:contains(canned)").length&&n.is(":contains(MediaPlayer)")&&!n.is(":contains(,)")&&($("span:contains(mediaPlayer):not([class]):not([id])").addClass("mark").css("backgroundColor","#eaab70").click(clearThis),e())),["corrections","flightStatus","global","notebook","radar","sharing","socialMedia","trains","transit","tvShow","wellness","gibberish"]))$(".original-domain:visible:contains("+dom+")").css("color","red").length&&e()}],[function(){function e(e,t){return $(t).text().toLowerCase()<$(e).text().toLowerCase()?1:-1}$(".verb-select select").focus(function(){$(this).find("option:not([disabled])").sort(e).appendTo($(this))})},function(){if(enUS()){var e=$(".label-value:not(.selected):visible"),t=$(".label-value.selected:visible"),n=$(),a=$("#wrapper:visible .content").text().toLowerCase(),i=$("select:visible:last"),o=e.filter(":contains(delta)"),s=$(".label-value[data-token-index="+(parseInt(o.attr("data-token-index"))+1)+"]"),c=$(".label-value:contains(Attributes):first").not(".selected"),r=t.filter(":contains(Album)"),l=t.filter(":contains(weatherReference)");n=e.filter(":contains(mediaPlayerLocation:not(.overlapped)), :contains(timerNoun):not(.overlapped), :contains(placeHint):not(.overlapped)"),($(".default-label-value:contains(room)").next(":contains(deviceGroup)").length||$(".default-label-value:contains(deviceGroup)").next(":contains(room)").length)&&(n=n.add(e.filter(".overlapped:contains(room)"))),t.is(":contains(boolSettingName), :contains(boolSettingState)")||(n=n.add(e.filter(":contains(floatSettingRef)"))),t.is(":contains(floatSettingName), :contains(floatSettingState)")||(n=n.add(e.filter(":contains(boolSettingRef)"))),s.is(":contains(Value)")&&(n=n.add(o)),"previous"===i.val()&&(n=n.add(c)),n.addClass("mark"),a.includes("album")||d(r),a.includes("send")&&"send"!==i.val()&&t.filter(":contains(Confirmation)").length&&u(),"mediaPlayer"===$(".domain:visible").text()&&a.includes("pause")&&"pause"!==i.val()&&u(),l.length&&d(l)}function u(){i.css("border","3px solid orange").focus().blur(clearThis)}function d(e){e.css("backgroundColor","tomato")}}]];e<3?t[e].forEach(function(e){e()}):function t(n,a){a<=0||$(".step.active").index()<2||(3===e&&$(".original-domain:visible").length||4===e&&($(".label-value:visible").length||$("#no-model-notice:visible").length)?n.forEach(function(e){e()}):setTimeout(t,50,n,--a))}(t[e],100)}document.addEventListener("keydown",function(e){$(".step");var n=$(".step.active").index(),a=$(".button:visible"),i=[65,83,68,70,71,72,74,75,76].indexOf(e.keyCode),o=$("div#domain-shortcuts-list span:visible");function s(){var e=$("a.item:visible:not(.active):not(.disabled)");e.length&&(e[0].click(),setTimeout(stepF,200,n))}if($(".annotation").is(":focus")&&$(".annotation-btns").length&&ann(e),i>-1&&gradable()&&!typing()&&!(e.ctrlKey||e.shiftKey||e.metaKey||e.altKey)&&(n<3?a.eq(i).click():3===n&&o.attr("tabindex",-1).eq(i).focus().click()),2===n){var c="1234".indexOf(e.key);c>-1&&$(".title").eq(2).css("color",["green","blue","red","gray"][c])}switch((e.ctrlKey?"taweE":["/","`","\\","Enter"]).includes(e.key)&&e.preventDefault(),e.ctrlKey?null:e.key){case"Home":$(".request-item.current").parent().prev().find("a").click();break;case"End":$(".request-item.current").parent().next().find("a").click();break;case"Enter":if(1===n){var r=$(".annotation"),l=$("#post-itn-textbox");l.is(":focus")?text.searchSelect(l):r.is(":focus")||text.searchSelect(r)}break;case"/":$(".playpause, .play, .pause").click();break;case"[":typing()||highlightClick($("button.prev"));break;case";":case"]":incomplete()||typing()||highlightClick($("button.next"));break;case":":typing()||t();break;case"m":case"\\":typing()||($(".step.active").prev().add(".step:last:not(.disabled)").first().click(),$(".content-widgets").is(":hidden")&&toggleTop());break;case"q":if(typing())break;case"`":n<=2?$("#Followup0, #Followup1").not(":checked").click():s();break;case"Tab":!function(){var t=$(".cc-header-inner, .annotation, iframe");t=t.add("#post-itn-textbox, #post-itn-area+>:first, select:visible"),typing()&&(t=t.add("#reset")),2===n&&(t=t.add("#locale-info")),t.attr("tabindex",0);var a=$("[tabindex]:not([tabindex=-1]):visible"),i=$();e.shiftKey?a.is(":focus")&&!a.first().is(":focus")||(i=a.last()):a.is(":focus")&&!a.last().is(":focus")||(i=a.first()),i.length&&(e.preventDefault(),i.focus())}();break;case"Delete":1===n&&text.preToPost();break;case"n":typing()||($(".domain-toggle:visible:not(:has(.active))>:first").click(),$(".content-widgets").is(":hidden")&&toggleTop(),$(".chosen:visible").length||$(".valid:visible").click(),$(".fa-spinner:visible").length||s(),stepF(4===n?n:n+1));break;case" ":$("select:focus").length||typing()||(e.preventDefault(),1===n&&$("#reset").is(":focus")?document.activeElement.dispatchEvent(new Event("click")):2===n&&toggleTop(),$(".mark:visible").click());break;case"Clear":1===n&&context.toggle();break;case"Alt":$(".annotation-dropdown").hasClass("open")&&$(".annotation-dropdown-menu li[alt]").each(function(){var e=$(this).find("span").text();$(this).find("span").text($(this).attr("alt")),$(this).attr("alt",e)});break;case"v":4===n&&setTimeout(function(){$("select:visible:last").focus()})}switch(e.ctrlKey?e.key:null){case"End":$(".request-item:not(.ungradable)").filter(":not(.complete), :last").find("a").first().click();break;case";":highlightClick($(".skip-request"));break;case".":setTimeout(searchUd,150),fixSpacesUd();break;case"c":1===n&&noSelection()&&!$("#post-itn-textbox").is(":focus")&&(text.capTags(),$(".annotation").is(":focus")||$(".annotation").focus());break;case"x":text.removeTag(0);break;case"z":text.slang();break;case"q":window.open(window.location.href.match(/.*\/p\/[^\/]*/),"_blank");break;case"t":text.selectTag();break;case"a":text.caseTags();break;case"e":searchLocal();break;case"E":searchItunes();break;case"u":n<=1&&($(".button.valid:first").click(),$(".radio-group:contains(Not Sure)>").click(),$(".button:contains(Unintelligible)").click())}switch(e.metaKey?e.key:null){case"e":noSelection()&&(openGuidePage(),openLingoPage());break;case"z":1===n&&(e.preventDefault(),$("#reset").click(),wrapTags(),$(".annotation-dropdown").is(".open")&&($(".annotation-dropdown").removeClass("open"),$(".selection").empty(),$(".annotation").focus()));break;case".":1===n&&"block"===$("#success-msg").css("display")&&autoTagUD()}});var text={titleMode:!1,caseMode:!1,searchSelect:function(e){for(var t=$(),n=null,a=e.contents(),i=window.getSelection(),o=!i.isCollapsed,s=0;s<a.length;s++){var c,r=a.eq(s).text(),l=RegExp(/(?!Siri|I\b)([A-Z0-9&+]+[^\s]* )*(?!Siri|I\b)([A-Z0-9]+[^\s]*)/,"g");if(!r.includes("[")){for(;null!==(c=l.exec(r));)if(c.index===i.anchorOffset&&c[0]===i.toString())o=!1;else if(!1===o){t=a.eq(s),n=c;break}if(t.length)break}}t.length?text.select(t,n.index,n.index+n[0].length):i.collapse(e[0])},select:function(e,t,n){if(e.length){var a=window.getSelection(),i=document.createRange();i.setStart(e[0],t),i.setEnd(e[0],n),a.removeAllRanges(),a.addRange(i)}},selectTag:function(){$(".annotation-tag.mark").length?$(".annotation-tag.mark").removeClass("mark").next().addClass("mark"):$(".annotation-tag:first").addClass("mark");var e=$(".annotation-tag.mark");e.length?text.select(e.contents(),e.text().indexOf(": ")+2,e.text().length-1):window.getSelection().collapse($(".annotation")[0])},removeTag:function(e){var t=$(".annotation-tag.mark").length?$(".annotation-tag.mark"):$(".annotation-tag:first"),n=t.text($(t).text().replace(/\[\w*: (.*)\]/,"$1")).removeClass("mark").contents().unwrap();text.select(n,0,n.text().length)},capTags:function(){function e(e,t){var n=t?[]:["a","an","as","at","the","of","and","to","on","or","in","for","from","with","by","featuring"];return e.split(" ").map((e,t,a)=>(t>0&&t<a.length-1&&n.includes(e.toLowerCase())?e[0].toLowerCase():e[0].toUpperCase())+e.slice(1)).join(" ")}var t=$(".annotation-tag.mark");t.length||(t=$(".annotation-tag")),t.each(function(){var t=$(this).text().match(/(\[.*: )(.*\])/);t[1].match(/[A-Z]/)&&$(this).text(t[1]+e(t[2],text.titleMode))}),text.titleMode=!text.titleMode,function(){var t=$(".annotation"),n=t.text();for(phrase of["google","low power mode","do not disturb"])n=n.replace(new RegExp(phrase,"gi"),e(phrase));n!==t.text()&&t.text(n)}()},caseTags:function(){var e=$(".annotation-tag.mark");e.length||(e=$(".annotation-tag")),e.each(function(){var e=$(this).text().match(/(\[.*: )(.*\])/);e[1].match(/[A-Z]/)&&$(this).text(e[1]+(text.caseMode?e[2].toLowerCase():e[2].toUpperCase()))}),text.caseMode=!text.caseMode},slang:function(){var e=$(".annotation");e.attr("original")?(e.text(e.attr("original")),e.click(),e.removeAttr("original")):(e.attr("original",e.text()),e.text(e.text().replace(/want to/g,"wanna")),e.text(e.text().replace(/going to/g,"gonna")),e.click())},preToPost:function(){var e=$(".annotation").text().trim(),t=$("#post-itn-textbox")[0];$("#title")[0].focus(),e=(e=(e=(e=(e=(e=e.replace(/\[[\w ]*: ([^\[]*)](\s('s))?/g,"$1$3")).replace(/\\[\w-]*-start ([^\\]*) \\[\w-]*-end/g,"$1")).replace(/((^| )[A-Z](?!\w)){3,}/g,function(e){return e.replace(/([A-Z]) /g,"$1")})).replace(/_/g," ")).replace(/ 's/g,"'s")).replace(/^([a-hj-z]|i(?![A-Z]))/,function(e){return e.toUpperCase()}),t.innerText="|"+e.trim(),t.focus(),setTimeout(function(){t.blur()},150)}};function searchUd(){if($(".annotation-dropdown-menu").length){var e=$(".annotation").text(),t=$(".annotation-dropdown-menu").children(),n=/\[[^:]+: ([^\]]+)\]/g,a=n.exec(e),i=[],o=$(".highlight").text()?$(".highlight").text():window.getSelection().toString();for(offset=0,perfOffset=0,rs=$(),o.length&&i.push(o.replace(n,"$1"));null!=a;)i.includes(a[1])||i.push(a[1]),a=n.exec(e);for(var s=0;s<i.length;s++){for(var c=0;c<t.length;c++){var r,l=t.eq(c).children("span").text(),u=new RegExp("(\\b(.\\B)*"+escapeRE(i[s])+"(\\B.)*\\b)","i");if("[artist] "!==t.eq(c).children("b").text()){e:if(i[s]===l||i[s]===o&&i[s].replace(/\W/g,"").toUpperCase()===l.replace(/\W/g,"").toUpperCase()){if("[photoAlbumName] "===t.eq(c).children("b").text())break e;t.eq(c).css("color","#FDFF47"),t.eq(c).insertBefore($(".annotation-dropdown-menu>").get(perfOffset)),offset++,perfOffset++;continue}(r=l.match(u)?l.match(u)[0]:"")&&(t.eq(c).not("[alt]").attr("alt",r),t.eq(c).css("color","#F8C471"),t.eq(c).insertBefore($(".annotation-dropdown-menu>").get(offset)),offset++)}}perfOffset=offset}}}function toggleTop(){var e=$(".content-widgets, #siri-grading-widget-wrapper>:lt(2)").add(".step-container>:has(iframe)>div:not(:has(iframe), .expand-transition)"),t=e.is(":visible"),n=t?"0.8":"1.0",a=t?"1250":"600";e.toggle(),$("iframe").css("transform-origin","0 0").css("transform","scale("+n+")"),$("iframe").height(a)}function addCSS(){var e=document.styleSheets[0],t=e.rules.length;for(rule of[".underline {border-bottom: solid orange}",".form-group:not(.payload-select, .verb-select), .previous-parse-detail {display: none !important}",".label-value.mark {color: darkorange}","select:focus {border: 3px solid lightblue}","button.correct.ui:not(.active)~.mark:not(.active) {opacity: 1.0 !important; background-color: #eaab70 !important}"])e.insertRule(rule,t++)}var context={off:!enUS(),set:function(){$("#title").attr("formatted")||($("#post-itn-textbox").blur(function(){context.highlight()}),!this.off&&$(".kv-bubble").length&&(this.highlight(),$(".group").slice(3,5).insertAfter("#title")),$("#title").attr("formatted",1))},clear:function(){$(".key-label").removeAttr("style"),$(".kv-string").css("backgroundColor","white")},toggle:function(){var e=this.off?3:2;this.off?this.highlight():this.clear(),this.off=!this.off,$(".group").slice(e,5).insertAfter("#title")},highlight:function(){if(!this.off){this.clear();for(var e,t=$(".kv-string"),n=["a","an","as","the","this","of","and","to"],a=$("#post-itn-textbox").text(),i=0;i<t.length;i++)if(e=new RegExp("(^|[^\\w])"+escapeRE(t.eq(i).text())+"(?!\\w)","i"),a.match(e))t.eq(i).css("backgroundColor","#FDFF47"),t.eq(i).parent().parent().prev().css("fontWeight","900");else{var o=t.eq(i).text();(o=o.replace(/: /g," ").replace(/\?/g,"").replace(/\!\B/g,"").replace(/\,/g,"")).toLowerCase().split(" ").forEach(function(o){e=new RegExp("(^|[^\\w])"+escapeRE(o)+"(?!\\w)","i"),o.length&&a.match(e)&&!n.includes(o)&&(t.eq(i).css("backgroundColor","#FFCC99"),t.eq(i).parent().parent().prev().css("fontWeight","900"))})}}}},counter={docObj:$("<a contenteditable='true' tabindex='-1'>0</a>"),projectName:$(".page-title").text(),skip:!0,s:window.location.href.match("/s/([^/]*)/")[1],gender:"",age:"",init:function(){this.docObj.insertAfter("li.reports").wrap("<li></li>"),localStorage.getItem(this.projectName)?this.docObj.text(localStorage.getItem(this.projectName)):localStorage.setItem(this.projectName,this.docObj.text())},incr:function(){!1===this.skip&&(this.docObj.text(String(parseInt(this.docObj.text())+1)),localStorage.setItem(this.projectName,this.docObj.text())),this.skip=!1},saveGenderAge:function(){this.gender=$(".horizontal-radio-wrapper").eq(0).find(":checked").attr("id"),this.age=$(".horizontal-radio-wrapper").eq(1).find(":checked").attr("id")},onload:function(){function e(){$(".title").eq(0).text(["Audio Quality |F|","Audio Quality"][$(this).index()])}function n(){$(".title").eq(2).css("color",["green","blue","red","gray"][$(this).index()])}!gradable()||$(".request-item.current.complete").length?this.skip=!0:this.incr(),$(".request-items>, .page-title").click(function(){counter.skip=!0}),$("#reset").attr("post",$("#post-itn-textbox").text().trim()).click(function(){$("#post-itn-textbox").text($("#reset").attr("post"))}),$("button.next").click(function(){gradable()&&!$(".step:eq(1)").is(".disabled")&&counter.saveGenderAge()}),$(".step, #next-step").click(function(){stepF($(".step.active").index())}),text.titleMode=!1,text.caseMode=!1,$("li.reports+").is("li")||this.init(),$(".step:eq(0)").hasClass("active")&&stepF(0),$(".annotation").focus(removeUnderscores),t.set&&t.cancel(),$(".radio-group :checked").length<3&&this.s===window.location.href.match("/s/([^/]*)/")[1]?this.gender&&$("#"+this.gender+", #"+this.age).click():(this.s=window.location.href.match("/s/([^/]*)/")[1],this.gender=this.age=""),$(".horizontal-radio-wrapper:contains(Follow) .column").click(e).filter(":has(:checked)").each(e),$("#result-grade .column").click(n).filter(":has(:checked)").each(n),$(".request-item.current").get(0).scrollIntoViewIfNeeded()}},s_ajaxListener={tempOpen:XMLHttpRequest.prototype.open,tempSend:XMLHttpRequest.prototype.send,callback:function(){this.url.includes("client.requests.cc.get_audio")&&counter.onload()}};function verifyUD(){var e=app.currentSession.userData.data,t=$(".annotation-tag.tag-valid"),n=$(".annotation-btns").text();standardTags=["contact","appname","paymentsUserName","photoContactName","phoneCallContactName","personFullName","smsGroupName","contacts-chatkit","voiceCommandName","photoAlbumName","photoTags","rideVehicleType","carProfileName","healthActivity","playlist","podcastTitle","company","correction"],t.each(function(){var t=$(this).text().match(/\[([^:]*):/)[1],a=$(this).text().match(/: (.*)]/)[1],i=e.find(e=>e.content_type===t),o=!1;if(!n.includes(t)){if(i)if(i.content.includes(a))o=!0;else if(standardTags.includes(t))for(entry of i.content){var s=new RegExp("(^|\\s)("+escapeRE(a)+")($|\\s)");if(entry.match(s)){o=!0;break}}$(this).css("color",o?"green":"red")}})}function autoTagUD(){var e=$(".annotation"),t=["voiceCommandName","device","accessory","group","room","zone","house","scene","appname","contact","playlist","deviceNames"],n=new RegExp("\\[(?:"+t.join("|")+"): ([^\\]]+)\\]","g"),a=e.text().replace(n,"$1"),i=app.currentSession.userData.data;function o(e,t){var n=a.indexOf(" in ");if(enUS()&&n>-1&&a.toLowerCase().indexOf(e.toLowerCase())>n)return!0;if("device"===t||"accessory"===t)for(var o=new RegExp("(?:^|\\s)"+escapeRE(e)+"(?=\\s|$)(?![^[]*\\])","gi");match=o.exec(a);){var s=a.slice(match.index+e.length+2).split(" ")[0];if(s.length){if(s.includes("device")||s.includes("accessory"))return!0;for(nextType of["device","accessory"]){var c=i.find(e=>e.content_type===nextType);if(c&&new RegExp("\\b("+c.content.join("|")+")\\b","i").test(s))return!0}}}return!1}for(var s={appname:function(e){return["FaceTime","TV","Search","Movies","Music","Home"].includes(e)},contact:function(e){return["Me"].includes(e)},device:o,accessory:o,group:o},c=10;c>0;c--)for(type of t)if(set=i.find(e=>e.content_type===type),set)for(name of(set=set.content.filter(e=>e.split(" ").length===c),set))if(!(type in s&&s[type](name,type))&&name.length){var r=new RegExp("(?:^|\\s)"+escapeRE(name)+"(?=\\s|$)(?![^[]*\\])","gi");a=a.replace(r," ["+type+": "+name+"]")}a.includes("[")&&e.text()!==a&&(e.text(a).focus(),wrapTags()),$("#success-msg").css("color","blue"),setTimeout(function(){$("#success-msg").css("color","")},50)}XMLHttpRequest.prototype.open=function(e,t){if(!e)e="";if(!t)t="";s_ajaxListener.tempOpen.apply(this,arguments),s_ajaxListener.method=e,s_ajaxListener.url=t,"get"==e.toLowerCase()&&(s_ajaxListener.data=t.split("?"),s_ajaxListener.data=s_ajaxListener.data[1])},XMLHttpRequest.prototype.send=function(e,t){if(!e)e="";if(!t)t="";s_ajaxListener.tempSend.apply(this,arguments),"post"==s_ajaxListener.method.toLowerCase()&&(s_ajaxListener.data=e),s_ajaxListener.callback()},counter.init(),counter.onload(),addCSS();

if(counter)throw counter.init(),"resetting";function f(){f.on=!f.on,f.on?($(".tokens, table>, .parses, .domain, .verb, .domain span").removeAttr("style"),$(".terminal-node").css("color","black")):(highlight(),alternateRows(),probeReference(),$(".parses:contains(default)").fadeTo(0,.4),$(".verb").css("color","gray"))}function searchLocal(){var e=window.getSelection().toString().replace(/\[[^\s]* |]/g,"").replace(/\s/g,"%20"),t=$(".data:last a").attr("href");e&&t&&(t=t.match(/(?:=)(.*)(?:&z)/)[1],window.open("https://www.google.com/maps/search/"+e+"/@"+t+",10z","_blank"))}function probeReference(){$(".terminal-node:contains(success)").css("color","green"),$(".terminal-node:contains(failure)").css("color","red"),$(".domain:odd").click(function(){if($(".category-wrapper").css("color",""),$(this).css("border-bottom").includes("solid"))$(this).css("border-bottom","");else{$(".domain:odd").css("border-bottom","");var e=$(this).text().trim();$(this).css("border-bottom","solid darkorange");var t=$(".category-wrapper:contains("+e+")");!t.length&&e.length&&(t=$(".category-wrapper:contains("+e+")")),t.css("color","darkorange");for(var i=$(this).parent().prev().text(),n=[["answerFacts","wolfram"],["encyclopedia","parsec"]],s=0;s<n.length;s++)i.includes(n[s][0])&&t.parent().next().find(".category-wrapper").each(function(){$(this).parent().next().is(":contains("+n[s][1]+")")&&$(this).css("color","darkorange")})}}),$(".domain:odd").each(function(){var e=$(this).text().trim(),t=$(this).parent().prev().text(),i=$(".category-wrapper:contains("+e+")");if(!i.length&&e.length&&(i=$(".category-wrapper:contains("+e+")")),i.length)for(var n=[["answerFacts","wolfram"],["encyclopedia","parsec"]],s=0;s<n.length;s++)if(t.includes(n[s][0])){var o=i.parent().next().find(".terminal-node:contains("+n[s][1]+")");o.length&&$(this).children().css("color",o.is(":contains(success)")?"green":"red")}})}function shrinkUD(){var e=$("#user-browser"),t=e.find(".body").hide();e.dblclick(function(){t.toggle()})}function highlight(){var e=$(".tokenparse-wrapper");e.find(".tokens").removeAttr("style"),e.each(function(){$(this).find(".tokens").each(function(){var t=$(this);e.each(function(){var e=!1;$(this).find(".tokens").each(function(){t.text()===$(this).text()&&(e=!0)}),e||t.css("color","royalblue")})})}),$(".tokens[style]").dblclick(function(){var e=$(this).text().trim();$(".tokens[style]").each(function(){$(this).text().trim()===e&&$(this).css("color","green")})})}function sortRows(){$("table>").sort(function(e,t){return $(t).find(".domain").text().toLowerCase()<$(e).find(".domain").text().toLowerCase()?1:-1}).appendTo("table")}function alternateRows(){var e=$(),t=["white","#E0E0E0"],i=0;$(".domain:even").each(function(){$(this).text()!==e.text()&&(i=1-i),$(this).parent().parent().css("background-color",t[i]),e=$(this)})}function shortcutsDisabled(){var e=event.metaKey||event.altKey,t=$("input[type='text']").is(":focus")||$(".swal2-modal.show-swal2").length;return(e||t)&&"/"!==event.key}function linkOnt(){var e="https://lingo.siri.apple.com/production-en/ontology/";$(".domain").click(function(t){var i=$(this).text().trim();t.metaKey&&window.open(e+i+"/description","_blank")}),$(".verb, .parses").click(function(t){var i=$(this).text().trim(),n=$(this).closest(":has(.domain)").find(".domain:first").text().trim(),s=$(this).is(".verb")?"verb":"parse";t.metaKey&&("verb"===s&&(i=i.replace("verb: ","")),window.open(e+n+"/labels/"+s+"-label/"+i+"/description","_blank"))})}function linkDomainSites(){var e="https://www.wolframalpha.com/input/?i=",t="https://www.google.com/search?q=";function i(e,t,i){if(t.metaKey){var n=window.getSelection().toString().split("\n").join("+");n||(n=e.find(".tokens").map(function(){return $.trim($(this).text())}).get().join("+")),window.open(i+n,"_blank")}}$(".terminal-node:contains(wolframAlphaQuery)").click(function(){if(event.metaKey){var t=$(this).text().trim().split(" ").slice(1).join("+");window.open(e+t,"_blank")}}),$("table>:contains(answerFacts) .tokenparse-wrapper").click(function(){i($(this),event,e)}),$("table>:has(:contains(webSearch),:contains(encyclopedia)) .tokenparse-wrapper").click(function(){i($(this),event,t)}),$("table>:contains(media) .tokenparse-wrapper").click(function(){i($(this),event,"https://www.google.com/search?q=site:itunes.apple.com/us/ ")})}document.addEventListener("keydown",function(e){if(!shortcutsDisabled()&&"Tab"!==e.key&&!$(e.target).is("[contenteditable]")){$("input[type=text]").not(":focus")&&!e.metaKey&&e.preventDefault();var t="12345`e".indexOf(e.key);if(t>5&&(t=5),t>-1){var n=$("table>:not(:first-child):hover"),s=n.find(".item"),o=s.eq(t);if(5===t&&s.filter(":contains(x)").is(".active"))for(i=1;i<=5;i++)if(!$("#summary").is(":contains("+i+")")){o=s.eq(i-1);break}o.click(),n.css("border-left","solid gray 3px").mouseleave(function(){$(this).css("border-left","")})}switch(e.key){case"p":case"/":case"r":$("i.play.icon, i.pause.icon").click();break;case"ArrowLeft":case"[":$("button:contains(⇦)").not(".disabled").last().click();break;case";":case"ArrowRight":case"]":case"g":e.ctrlKey?$("#skip").click():$("button:contains(⇨)").not(".disabled").first().click();break;case"G":$("#skip").click();break;case"x":$(".ui.checkbox.slider input").click();break;case"c":if(e.ctrlKey)hideParseSetting=!hideParseSetting;else{var a=$(".parses");a.is(":visible")?a.hide():a.show()}break;case"Clear":f();break;case"e":e.ctrlKey&&searchLocal()}}}),document.addEventListener("keydown",function(e){if(!shortcutsDisabled()){var t=["a","s","d","f"," "].indexOf(e.key),i=$(".row[data-v-141b311f]"),n=i.not(".center, :has(.selected)").add(i.last()).first(),s=i.filter("[style]").add(n).first();t>-1?(e.preventDefault(),s.find(".choice").eq(t).click()):"z"===e.key&&(s.removeAttr("style"),(s=s.prev().add(n).first()).is(".center")&&(s=s.prev()),s.css("background-color","#9ac9f8"),i.click(function(){i.removeAttr("style")}))}});var counter={docObj:$("<span contenteditable='true' tabindex='-1'>0</span"),projectName:$("#project-name").text(),skip:!0,id:"",init:function(){this.docObj.insertBefore("#skip").css("padding","9px"),localStorage.getItem(this.projectName)?this.docObj.text(localStorage.getItem(this.projectName)):localStorage.setItem(this.projectName,this.docObj.text()),this.observer.observe($("body")[0],{attributes:!0}),this.onload()},incr:function(){this.docObj.text(String(parseInt(this.docObj.text())+1)),localStorage.setItem(this.projectName,this.docObj.text())},onload:function(){var e=$(".audio-id").text();if(e!==this.id&&e){if(this.id=e,$(".request-group").click(function(){this.skip=!0}),$(".request.active").hasClass("gradable")||!$(".request-group").length){var t=!!$(".ui.positive.message").length;this.skip||t||this.incr(),this.skip=t}shrinkUD(),highlight(),alternateRows(),sortRows(),linkOnt(),linkDomainSites(),probeReference(),$(".parses:contains(default)").fadeTo(0,.4),hideParseSetting&&$(".parses").hide(),$(".verb").css("color","gray"),$(".ui.positive.message").length||setTimeout(function(){$(".ui.checkbox.slider input").click()},100)}},observer:new MutationObserver(function(e){e.forEach(function(e){($(e.target).hasClass("pace-done")||$(".pace-progress").attr("data-progress-text").includes("99"))&&counter.onload()})})};hideParseSetting=!1,counter.init();

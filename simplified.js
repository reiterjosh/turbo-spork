if(counter)throw counter.init(),"resetting";function formKeys(e){var t="asdf ".indexOf(e.key),n=$("#questions>.row"),i=n.not(".center, :has(.selected)").add(n.last()).first(),s=n.filter("[style]").add(i).first();t>-1?(e.preventDefault(),s.find(".choice").eq(t).click()):"z"===e.key&&(s.removeAttr("style"),(s=s.prev().add(i).first()).is(".center")&&(s=s.prev()),s.css("background-color","#9ac9f8"),n.click(function(){n.removeAttr("style")}))}function shortcutsDisabled(){var e=event.shiftKey||event.metaKey||event.altKey,t=$("input[type='text']").is(":focus")||$(".swal2-modal.show-swal2").length||$(event.target).is("[contenteditable]");return(e||t)&&"/"!==event.key}function fixSidebar(){$("#meta").insertBefore($("#nav-sidebar")),$("#nav-sidebar").css("height","900px").css("overflow","scroll")}function toggleSnip(){$("#snippets-wrapper>:gt(1):lt(-3)").not(":has( .bubble)").toggle()}function changeStyle(e,t,n){for(var i=document.styleSheets,s=0;s<i.length;s++)if(i[s].href.includes("css/app"))for(var o=i[s].cssRules,c=0;c<o.length;c++)o[c].selectorText&&o[c].selectorText.includes(e)&&(o[c].style[t]=n)}function toggleBlur(){toggleBlur.off=!toggleBlur.off,changeStyle(".hidden","filter",toggleBlur.off?"none":"blur(3px)")}function toggleAnim(){for(var e=document.styleSheets,t="*, ::before, ::after",n=0;n<e.length;n++)e[n].href.includes("css/app")&&(e[n].cssRules[0].selectorText===t?e[n].deleteRule(0):e[n].insertRule(t+"{transition-property: none !important;transform: none !important;animation: none !important;}"))}function setAlphaSort(){$(".key").dblclick(function(){$("#results .type").remove(),setTimeout(function(){$("#results .row").sort(function(e,t){return $(t).text().toLowerCase()<$(e).text().toLowerCase()?1:-1}).appendTo("#results")},300)})}document.addEventListener("keydown",function(e){if("Enter"===e.key&&$(".swal2-container").remove(),!shortcutsDisabled()&&"Tab"!==e.key)switch(formKeys(e),e.preventDefault(),e.key){case"Home":$(".request.active").parent().prev().click();break;case"End":$(".request.active").parent().next().click();break;case"p":case"/":case"r":$("i.play.icon, i.pause.icon").click();break;case"ArrowLeft":case"[":$("button:contains(⇦)").not(".disabled").last().click();break;case";":case"ArrowRight":case"]":e.ctrlKey?$("#skip").click():$("button:contains(⇨)").not(".disabled").first().click();break;case"g":if(1===$(".tab.incomplete").length&&!$(".choice.selected").length){$("#questions>.row").find(".choice:last").click(),setTimeout(function(){$("button:contains(⇨)").not(".disabled").first().click()},50);break}var t=$(".tab.active").next();t.length?t.click():$(".tab.incomplete").length>1?$(".tab").first().click():$("button:contains(⇨)").not(".disabled").first().click();break;case"x":case"h":$("#insufficient-evidence>").click().find("input").click();break;case"Clear":e.ctrlKey?toggleAnim():toggleBlur();break;case"j":case"`":toggleSnip()}});var counter={docObj:$("<span contenteditable='true' tabindex='-1'>0</span"),projectName:$("#project-name").text(),skip:!0,id:"",init:function(){this.docObj.insertBefore("#skip").css("padding","9px"),localStorage.getItem(this.projectName)?this.docObj.text(localStorage.getItem(this.projectName)):localStorage.setItem(this.projectName,this.docObj.text()),counter.observer.observe($("#widget-container")[0],{childList:!0}),this.onload()},incr:function(){this.docObj.text(String(parseInt(this.docObj.text())+1)),localStorage.setItem(this.projectName,this.docObj.text())},onload:function(){if(counter.docObj.is(":visible")||counter.init(),$(".request-group").unbind("click").click(function(){counter.skip=!0}),$(".request.active").hasClass("gradable")||!$(".request-group").length){var e=!!$(".ui.positive.message").length;this.skip||e||this.incr(),this.skip=e}setTimeout(setAlphaSort,1e3),$(".request.active").length&&$(".request.active").get(0).scrollIntoViewIfNeeded()},observer:new MutationObserver(function(e){e.forEach(function(e){e.addedNodes&&"sections-container"===$(e.addedNodes[0]).attr("id")&&counter.onload()})})};fixSidebar(),counter.init();

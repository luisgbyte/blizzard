"use strict";var slide_thumbnail=new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",watchSlidesProcess:!0}),slide_hero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slide_thumbnail},autoplay:{delay:5e3}}),allFilters=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games"),btnOpenModal=(allFilters.forEach(function(t,n){return t.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[n].classList.add("active"),t.classList.add("active")})}),document.querySelector(".js-open-modal")),btnFecharModal=document.querySelector(".js-close-modal"),btnMenu=(btnOpenModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal")}),btnFecharModal.addEventListener("click",function(){document.documentElement.classList.remove("show-modal")}),document.querySelectorAll(".js-btn-menu")),MenuSite=document.querySelectorAll(".js-menu");btnMenu.forEach(function(t,n){t.addEventListener("click",function(e){e.preventDefault(),MenuSite.forEach(function(e){e.classList.remove("active"),e.addEventListener("mouseleave",function(){e.classList.remove("active"),btnMenu.forEach(function(e){e.classList.remove("active")})})}),btnMenu.forEach(function(e){e.classList.remove("active")}),t.classList.add("active"),MenuSite[n].classList.add("active")})});
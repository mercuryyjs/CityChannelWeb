$(document).ready(function(){new Swiper(".swiper-container",{pagination:".swiper-pagination"});$("#hotChannels h1").click(function(){var a=$("#hotChannels .tab");a.hide(),a.eq(0).fadeIn()}),$("#distance0").click(function(){var a=$("#hotChannels .tab");console.log(a.length),a.hide(),a.eq(1).fadeIn()}),$("#lawSet").click(function(){var a=$("#hotChannels .tab");a.hide(),a.eq(2).fadeIn()})});
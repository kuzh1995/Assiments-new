$(document).ready((function(){var t=window.location.search.split("=")[1],o=null;function e(t,o){var e=document.createElement("img");return e.src=t,0===o&&e.classList.add("active-image"),e.onclick=function(){$("#product-images img").removeClass("active-image"),e.classList.add("active-image"),$("#product-preview").attr("src",t)},e}$.get("https://63c2a672b0c286fbe5f10b3f.mockapi.io/products/"+t,(function(t,c){o=t,$("#product-preview").attr("src",t.preview),$("#product-title").html(t.name),$("#product-brand").html(t.brand),$("#description").html(t.description),$("#product-price").html(t.price);for(var r=0;r<t.photos.length;r++)$("#product-images").append(e(t.photos[r],r))})),$("#btn-add-to-cart").click((function(){$("#btn-add-to-cart").addClass("bigger"),setTimeout((function(){$("#btn-add-to-cart").removeClass("bigger")}),200);var t=window.localStorage.getItem("product-list");t=(t=null===t||""===t?[]:t).length>0?JSON.parse(t):[],console.log(t);for(var e=-1,c=0;c<t.length;c++)parseInt(t[c].id)==parseInt(o.id)&&(e=c);e>-1?(t[e].count=t[e].count+1,console.log(t[e].count),window.localStorage.setItem("product-list",JSON.stringify(t))):(o.count=1,t.push(o),console.log(t),window.localStorage.setItem("product-list",JSON.stringify(t)));var r=0;for(c=0;c<t.length;c++)r+=t[c].count;$("#cart-count").html(r)}))}));
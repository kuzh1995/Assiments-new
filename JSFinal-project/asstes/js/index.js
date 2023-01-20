$(document).ready(function () {
    function e(e) {
        var col = document.createElement("div");
        col.classList.add("col");

        var link = document.createElement("a");
        link.href = "/details.html?p=" + e.id, col.appendChild(link);

        var card = document.createElement("div");
        card.classList.add("card"), link.appendChild(card);

        var cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top"), (cardImg.src = e.preview), (cardImg.alt = e.name + " Pic"), card.appendChild(cardImg);

        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body"), card.appendChild(cardBody);

        var productDetails = document.createElement("div");
        productDetails.classList.add("product-details"), cardBody.appendChild(productDetails);

        var headddingFour = document.createElement("h4");
        headddingFour.classList.add("headdding-four"), productDetails.appendChild(headddingFour);
        ProductName = document.createTextNode(e.name);
        headddingFour.appendChild(ProductName);

        var brandText = document.createElement("span");
        brandText.classList.add("brand-name"), productDetails.appendChild(brandText);
        brandName = document.createTextNode(e.brand);
        brandText.appendChild(brandName);
        
        var cardText = document.createElement("p");
        cardText.classList.add("card-text"), productDetails.appendChild(cardText);
        cardPrice = document.createTextNode("Rs " + e.price);
        cardText.appendChild(cardPrice);

        return col;
    }
    $(".center").slick({ centerMode: !0, slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 2e3, dots: !0, arrows: !1, }),
        $.get("https://63c2a672b0c286fbe5f10b3f.mockapi.io/products", function (d, t) {
            for (var a = d, n = 0; n < a.length; n++) a[n].isAccessory ? $("#accessory-grid").append(e(a[n])) : $("#clothing-grid").append(e(a[n]));
        });
});

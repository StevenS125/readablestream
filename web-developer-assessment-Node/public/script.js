//proxy for cors for front end for Lowe's API given 

var proxyurl = "https://cors-anywhere.herokuapp.com/";

// fetch API call 
const getProductList = function() {
    fetch(proxyurl +
            'https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1')
        .then(function(res) {
            return res.json()

        })


    .then(function(data) {

        // makes price element for hero div
        var heroprice = document.createElement("div");
        heroprice.setAttribute('id', 'priceRemo');
        heroprice.innerHTML = '$' + data.productList[0].networkPrice + "0";

        //makes button for add to cart for hero div

        var heroAddButton = document.createElement('button');

        heroAddButton.setAttribute('class', 'heroButton')
        heroAddButton.setAttribute('id', 'herocart')
        heroAddButton.setAttribute('onclick', 'priceAlert(this)');
        heroAddButton.innerHTML = 'Add to Cart';

        //makes hero image for hero display

        var heroimg = document.createElement("img")
        heroimg.setAttribute('id', 'secondHero')
        heroimg.setAttribute('class', 'img')
        heroimg.src = data.productList[0].imageUrls.md
        heroimg.alt = data.productList[0].brand + ' ' + data.productList[0].description;

        // makes top description of element selected

        var herodesc = document.createElement("div");
        herodesc.setAttribute('class', 'heroBullet');
        herodesc.setAttribute('id', 'secondDesc');
        herodesc.innerHTML = data.productList[0].brand + " " + data.productList[0].description

        // makes bullet description elements and appends them to parent     

        var heromarketDisp = document.createElement("div");
        var heromarkBullet = document.createElement("li");
        var heromarkBullet2 = document.createElement("li");
        var heromarkBullet3 = document.createElement("li");


        heromarketDisp.setAttribute('id', 'secondBull');
        heromarkBullet.innerHTML = "ENERGY STAR" + "&#174" + " Certified? " + data.productList[0].energyStar
        heromarkBullet2.innerHTML = data.productList[0].marketingBullets[0]
        heromarkBullet3.innerHTML = data.productList[0].marketingBullets[1]

        heromarketDisp.appendChild(heromarkBullet)
        heromarketDisp.appendChild(heromarkBullet2)
        heromarketDisp.appendChild(heromarkBullet3)


        // append all elements to hero div

        document.getElementById('hero').appendChild(heroimg)
        document.getElementById('hero').appendChild(herodesc)
        document.getElementById('hero').appendChild(heromarketDisp)
        document.getElementById('heroRight').appendChild(heroprice)
        document.getElementById('heroRight').appendChild(heroAddButton)

        for (i in data.productList) {
            //create container div for content

            var parentDefault = document.createElement("div")

            parentDefault.setAttribute('class', 'defaultcontainer');
            parentDefault.setAttribute('id', 'containerId' + [i])
            parentDefault.setAttribute('onmouseover', 'mouseDisp(this)');
            parentDefault.setAttribute('this.onmouseover', null);


            //make view more button element
            var viewbutton = document.createElement('button');

            viewbutton.setAttribute('class', 'mainButton')
            viewbutton.setAttribute('onclick', 'priceAlert(this)');
            viewbutton.innerHTML = 'view more';
            viewbutton.id = 'button' + [i];



            //create image tag and images
            var img = document.createElement("img")
            img.setAttribute('id', 'smokeid' + [i])
            img.setAttribute('class', 'img')
            img.src = data.productList[i].imageUrls.sm
            img.alt = data.productList[i].brand + ' ' + data.productList[i].description;



            //create div to store marketing bullets
            var marketDisp = document.createElement("ul");
            var markBullet = document.createElement("li");
            var markBullet2 = document.createElement("li");
            var markBullet3 = document.createElement("li");

            marketDisp.setAttribute('class', 'markBull');
            marketDisp.setAttribute('id', 'market' + [i]);
            markBullet.innerHTML = "ENERGY STAR" + "&#174" + " Certified? " + data.productList[i].energyStar
            markBullet2.innerHTML = data.productList[i].marketingBullets[0]
            markBullet3.innerHTML = data.productList[i].marketingBullets[1]

            marketDisp.appendChild(markBullet)
            marketDisp.appendChild(markBullet2)
            marketDisp.appendChild(markBullet3)








            //create div to store marketing descriptions
            var desc = document.createElement("div");
            desc.setAttribute('class', 'descript');
            desc.setAttribute('id', 'descPrice' + [i]);
            desc.innerHTML = data.productList[i].brand + " " + data.productList[i].description



            //create divs to store price bullets
            var price = document.createElement("div");
            price.setAttribute('id', 'priceFont');
            price.innerHTML = '$' + data.productList[i].networkPrice + "0";


            // creates default display image 
            var heroImage = document.createElement('img')
            heroImage.setAttribute('id', 'heroImageId' + [i])
            heroImage.setAttribute('class', 'heroImageClass')
            heroImage.src = data.productList[i].imageUrls.md
            heroImage.alt = data.productList[i].brand + ' ' + data.productList[i].description;

            //append to defaultcontainer div 
            parentDefault.appendChild(img)
            parentDefault.appendChild(desc)
            parentDefault.appendChild(price)
            parentDefault.appendChild(viewbutton)
            parentDefault.appendChild(heroImage)
            parentDefault.appendChild(marketDisp)

            document.getElementById("container").appendChild(parentDefault)

        }
    })
}

// function to get price and display when adding to cart

getProductList()

var priceAlert = () => {
    var getinner = function(e) {

        var alertPrice = "Your subtotal is: " +
            document.getElementById('priceRemo').innerHTML




        alert(alertPrice);
    }
    getinner()
}


var mouseDisp = () => {
    var triggered = 0;


    //sets if hero display should change elements based on which container it is in 
    window.onmouseover = function(e) {
        if (((e.target.id == 'containerId0') ||
                (e.target.id == 'containerId1') ||
                (e.target.id == 'containerId2') ||
                (e.target.id == 'containerId3') ||
                (e.target.id == 'containerId4') ||
                (e.target.id == 'containerId5') ||
                (e.target.id == 'containerId6') ||
                (e.target.id == 'containerId7') ||
                (e.target.id == 'containerId8') ||
                (e.target.id == 'containerId9') ||
                (e.target.id == 'containerId10') ||
                (e.target.id == 'containerId11') ||
                (e.target.id == 'containerId12') ||
                (e.target.id == 'containerId13') ||
                (e.target.id == 'containerId14') ||
                (e.target.id == 'containerId15') ||
                (e.target.id == 'containerId16') ||
                (e.target.id == 'containerId17') ||
                (e.target.id == 'containerId18') ||
                (e.target.id == 'containerId19')


            ) && (triggered == 0)) {

            //create image for hero display
            var heroImage = document.createElement('img')
            heroImage.setAttribute('id', 'heroDisp')
            var children = document.getElementById(e.target.id).childNodes
            var herosrc = children[4].src
            heroImage.src = herosrc
            document.getElementById('hero').appendChild(heroImage)


            // creates desciption for hero display

            var heroDesc = document.createElement('div')
            heroDesc.setAttribute('id', 'heroDesc')
            var children = document.getElementById(e.target.id).childNodes
            var herotitle = children[1].innerHTML
            heroDesc.innerHTML = herotitle
            document.getElementById('hero').appendChild(heroDesc)

            // creates price for hero display

            var heroPrice = document.createElement('div')
            heroPrice.setAttribute('id', 'heroProd')
            document.getElementById('heroRight').appendChild(heroPrice)
            var children = document.getElementById(e.target.id).childNodes
            var heroPricehtml = children[2].innerHTML
            heroPrice.innerHTML = heroPricehtml

            //creates marketing bullets for hero display
            var heroBullets = document.createElement('div')
            heroBullets.setAttribute('id', 'heroBullet')
            document.getElementById('hero').appendChild(heroBullets)
            var children = document.getElementById(e.target.id).childNodes
            var heroBulletshtml = children[5].innerHTML
            heroBullets.innerHTML = heroBulletshtml

            // creates new add to cart button for hero display

            var heroAddButton = document.createElement('button');

            heroAddButton.setAttribute('class', 'heroButton')
            heroAddButton.setAttribute('onclick', 'priceAlert(this)');
            heroAddButton.innerHTML = 'Add to Cart';
            heroAddButton.id = 'heroaddcart';

            document.getElementById('heroRight').appendChild(heroAddButton)


            // removes old divs once mousedover so divs do not stack up in display
            triggered = 1;
            var removePrice = document.getElementById('priceRemo')

            if (removePrice === null) {

            } else {
                removePrice.remove()
            }


            var removeHero = document.getElementById('herocart')
            if (removeHero === null) {

            } else {

                removeHero.remove()
            }

            var remHeroImg = document.getElementById('secondHero')
            if (remHeroImg === null) {

            } else {

                remHeroImg.remove()
            }

            var remDesc = document.getElementById('secondDesc')
            if (remDesc === null) {

            } else {

                remDesc.remove()
            }

            var remBull = document.getElementById('secondBull')
            if (remBull === null) {

            } else {

                remBull.remove()
            }


        }
    }

    // targets and removes display divs that are no longer needed because of mouseover

    window.onmouseout = function(e) {
        if (((e.target.id == 'containerId0') ||
                (e.target.id == 'containerId1') ||
                (e.target.id == 'containerId2') ||
                (e.target.id == 'containerId3') ||
                (e.target.id == 'containerId4') ||
                (e.target.id == 'containerId5') ||
                (e.target.id == 'containerId6') ||
                (e.target.id == 'containerId7') ||
                (e.target.id == 'containerId8') ||
                (e.target.id == 'containerId9') ||
                (e.target.id == 'containerId10') ||
                (e.target.id == 'containerId11') ||
                (e.target.id == 'containerId12') ||
                (e.target.id == 'containerId13') ||
                (e.target.id == 'containerId14') ||
                (e.target.id == 'containerId15') ||
                (e.target.id == 'containerId16') ||
                (e.target.id == 'containerId17') ||
                (e.target.id == 'containerId18') ||
                (e.target.id == 'containerId19'))) {
            triggered = 0;


            var removecart = document.getElementById('heroaddcart')
            removecart.setAttribute('id', 'herocart')

            var heroP = document.getElementById('heroProd')
            heroP.setAttribute('id', 'priceRemo')

            var heroP = document.getElementById('heroDisp')
            heroP.setAttribute('id', 'secondHero')

            var heroP = document.getElementById('heroDesc')
            heroP.setAttribute('id', 'secondDesc')

            var heroBull = document.getElementById('heroBullet')
            heroBull.setAttribute('id', 'secondBull')

        }
    }

}
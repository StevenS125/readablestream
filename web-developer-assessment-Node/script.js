var daddy = document.createElement("div");

var brands = [];
var proxyurl = "https://cors-anywhere.herokuapp.com/";


const getProductList = function() {
    fetch(proxyurl +
            'https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1')
        .then(function(res) {
            return res.json()


        })


    .then(function(data) {

        for (i in data.productList) {
            //create container div for content

            var daddy = document.createElement("div")

            daddy.setAttribute('class', 'defaultcontainer');
            daddy.setAttribute('id', 'containerId' + [i])
            daddy.setAttribute('onmouseover', 'smokey(this)');
            daddy.setAttribute('this.onmouseover', null);


            var viewbutton = document.createElement('button');

            viewbutton.setAttribute('class', 'mainButton')
            viewbutton.setAttribute('onclick', 'priceAlert(this)');
            viewbutton.innerHTML = 'view more';
            viewbutton.id = 'button' + [i];



            //create image tag and images
            var img = document.createElement("img")
            img.setAttribute('id', 'smokeid' + [i])

            img.src = data.productList[i].imageUrls.xl
            img.alt = data.productList[i].brand + ' ' + data.productList[i].description;



            //create div to store marketing bullets
            var desc = document.createElement("div");
            desc.setAttribute('class', 'descript');
            desc.setAttribute('id', 'descPrice' + [i]);
            desc.innerHTML = data.productList[i].brand + " " + data.productList[i].description

            //create divs to store price bullets
            var price = document.createElement("div");
            price.setAttribute('id', 'priceFont');
            price.innerHTML = data.productList[i].networkPrice;

            //append to defaultcontainer div 
            daddy.appendChild(img)
            daddy.appendChild(desc)
            daddy.appendChild(price)
            daddy.appendChild(viewbutton)

            document.getElementById("container").appendChild(daddy)



            /* hero area creating image, add button 
                        /*  document.getElementById("hero").appendChild()
                         */


        }




    })
}


getProductList()

var priceAlert = () => {
    var getinner = function(e) {

        var alertPrice = document.getElementById('descPrice2').innerHTML


        console.log(alertPrice);

        alert(alertPrice);
    }
    getinner()
}


var smokey = () => {
    var triggered = 0;



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



            var heroPrice = document.createElement('div')
            heroPrice.setAttribute('id', 'heroProd')
            document.getElementById('heroRight').appendChild(heroPrice)
            var children = document.getElementById(e.target.id).childNodes
            var heroPricehtml = children[2].innerHTML
            heroPrice.innerHTML = heroPricehtml





            var heroAddButton = document.createElement('button');

            heroAddButton.setAttribute('class', 'heroButton')
            heroAddButton.setAttribute('onclick', 'priceAlert(this)');
            heroAddButton.innerHTML = 'Add to Cart';
            heroAddButton.id = 'heroaddcart';

            document.getElementById('heroRight').appendChild(heroAddButton)






            var synco = e.target.id


            var myDiv = document.getElementById(synco);
            var divClone = myDiv.cloneNode(true);
            divClone.setAttribute('id', 'heroimageid')
            hero.appendChild(divClone);











            triggered = 1;
            var removePrice = document.getElementById('priceRemo')

            if (removePrice === null) {
                console.log('it worked')
            } else {
                removePrice.remove()
            }

            var oneofthem = document.getElementById('secondImage')

            if (oneofthem === null) {
                console.log('success')
            } else {
                oneofthem.remove()
            }

            var removeHero = document.getElementById('herocart')
            if (removeHero === null) {
                console.log('it worked')
            } else {

                removeHero.remove()
            }


        }
    }

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

            var oneofthem = document.getElementById('heroimageid')
            oneofthem.setAttribute('id', 'secondImage')

            var removecart = document.getElementById('heroaddcart')
            removecart.setAttribute('id', 'herocart')

            var heroP = document.getElementById('heroProd')
            heroP.setAttribute('id', 'priceRemo')




        }
    }





}
var brands = [];
var proxyurl = "https://cors-anywhere.herokuapp.com/";
var getProductList = function() {
    fetch(proxyurl +
            'https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1')
        .then(function(res) {
            return res.json()

        }).then(function(data) {
             for (i in data.productList) {
                 daddy = document.createElement("div");
                 console.log(data.productList[i].imageUrls.md)
                 img = document.createElement("img");
                 img.src = data.productList[i].imageUrls.md
                 console.log(data.productList[i].brand)
                 console.log(data.productList[i].description)
                 desc = document.createElement("div");
                 desc.innerHTML = data.productList[i].brand + " " + data.productList[i].description
                 console.log(data.productList[i].networkPrice)
                 price = document.createElement("div");
                 price.innerHTML = data.productList[i].networkPrice;
                 daddy.appendChild(img)
                 daddy.appendChild(desc)
                 daddy.appendChild(price)
                 document.getElementById("container").appendChild(daddy)
             }

          
            
        })
}
getProductList();
console.log("dog")
    // .then(res => res.json()); let brandNames = () => getProductList() .then(json => json.productList) .then(productList => productList.map(p => brands.push(p))); const todom = () => brandNames().then(branded => brands.map(z
    // => z.brand)).then(console.log); // todom() .then()
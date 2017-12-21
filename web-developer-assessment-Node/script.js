var brands = [];
var proxyurl = "https://cors-anywhere.herokuapp.com/";
var getProductList = function() {
    fetch(proxyurl +
            'https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1')
        .then(function(res) {
            res.json()

        }).then(function(data) {
            console.log(data.body)
        })
}
getProductList();
console.log("dog")
    // .then(res => res.json()); let brandNames = () => getProductList() .then(json => json.productList) .then(productList => productList.map(p => brands.push(p))); const todom = () => brandNames().then(branded => brands.map(z
    // => z.brand)).then(console.log); // todom() .then()
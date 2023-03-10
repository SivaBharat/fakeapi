function getFakeApi() {
    fetch('https://fakestoreapi.com/products?limit=5')
        .then(function (res) { return res.json(); })
        .then(function (json) { return console.log(json); });
}
getFakeApi();

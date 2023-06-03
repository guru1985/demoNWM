module.exports = {
    Login:
    {
        url: 'https://www.saucedemo.com',
        username: '#user-name',
        password: '#password',
        submit: '#login-button',
        title: 'div[class="login_logo"]',
        titleProduct: 'div[class="header_secondary_container"] > span.title'
    },
    Sorting:
    {
        sortOptions: 'select[class="product_sort_container"]',
        priceHiLo: 'select[class="product_sort_container"] > option[value="lohi"]',
        inventoryItem: 'div[class="inventory_item"]',
        inventoryitemprice: 'div[class="inventory_item_description"] > div[class="pricebar"] \
        > div[class="inventory_item_price"]',
        lowestprice: 'div[class="inventory_item"]>div[class="inventory_item_description"] > \
        div[class="pricebar"] > div[class="inventory_item_price"]'
    },
    AddtoCart:
    {
        SaucelabOnsie: '#add-to-cart-sauce-labs-onesie',
        SaucelabsBikeLight: '#add-to-cart-sauce-labs-bike-light',
        cartItems: 'a[class="shopping_cart_link"]>span[class="shopping_cart_badge"]',
    }
}
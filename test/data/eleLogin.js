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
        saucelabOnsieAddToCart: '#add-to-cart-sauce-labs-onesie',
        saucelabOnsie: '#item_2_title_link',
        saucelabsBikeLightAddToCart: '#add-to-cart-sauce-labs-bike-light',
        saucelabsBikeLight: '#item_0_title_link',
        cartItems: 'a[class="shopping_cart_link"]>span[class="shopping_cart_badge"]',
    },
    StartCheckout:
    {
        cart: 'a[class="shopping_cart_link"]',
        checkout: '#checkout',
        firstName: '#first-name',
        lastName: '#last-name',
        zipCode: '#postal-code',
        continue: '#continue'

    },

CheckoutInfoAndFinish:
{
    titleCheckout: 'div[class="header_secondary_container"] > span.title',
    paymentInfoLabel: 'div[class="summary_info_label"]',
    paymentInfoValue: 'div[class="summary_value_label"]',
    shippingInfoLabel: 'div[class="summary_info_label"]:nth-child(3)',
    shippingInfoValue: 'div[class="summary_value_label"]:nth-child(4)',
    priceTotalLabel: 'div[class="summary_info_label"]:nth-child(5)',
    priceSummary: 'div[class="summary_subtotal_label"]',
    taxSummary: 'div[class="summary_tax_label"]',
    total: 'div[class="summary_info_label summary_total_label"]',
    finish: '#finish',
    OnsieValue: 'div[class="inventory_item_price"]:nth-child(1)',
    BikeLightprice: 'div[class="cart_item"]:nth-child(4)> div.cart_item_label>div.item_pricebar>div.inventory_item_price'


}

}
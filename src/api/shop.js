/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli Songs CD", "price": 19.99, "inventory": 5},
  {"id": 4, "title": "Iphone11 pro", "price": 1119.99, "inventory": 7},
  {"id": 5, "title": "Kanji 2500", "price": 25.73, "inventory": 17},
  {"id": 6, "title": "Blue Jeans", "price": 22.77, "inventory": 10},
  {"id": 7, "title": "timberlandShoes", "price": 244.77, "inventory": 6},
  {"id": 8, "title": "RubyOnRails", "price": 20.77, "inventory": 16},
  {"id": 8, "title": "Mac BookPro", "price": 2500.77, "inventory": 16},
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  // console.log(4);
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
// console.log(getProducts);

import { types } from "mobx-state-tree"

const date = []

export const WishListItem = types.model({
    id: types.number,
    name: types.string,
    country: types.string,
    quantity: types.number,
    price: types.number,
}).actions(self =>({
    setPrice(newPrice) {
        self.price = newPrice
    },
    setQuantity(newQuantity) {
        self.quantity = newQuantity
    }
}))

const defaultList = [{"id": 1, "name": "доска", "country": "50x50", "quantity": 5, "price": 175}]

export const WishList = types.model({
    items: types.optional(types.array(WishListItem), defaultList),
}).actions(self => ({
    add(item) {
        self.item.push(item)
    }
}))
.views(self => ({
    get totalPrice() {
        return self.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    get totalQuantity() {
        return self.items.reduce((sum, item) => sum + item.quantity, 0)
    }
}))
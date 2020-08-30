import { types, getParent, destroy } from "mobx-state-tree"

export const WishListItem = types.model({
    id: types.number,
    name: types.string,
    character: types.string,
    quantity: types.number,
    price: types.number,
}).actions(self =>({
    changePrice(newPrice) {
        self.price = newPrice
    },
    changeQuantity(newQuantity) {
        self.quantity = newQuantity
    },
    remove(){
        getParent(self, 2).remove(self)
    },
}))

const defaultList = [{"id": 1, "name": "доска", "character": "50x50", "quantity": 5, "price": 175}]

export const WishList = types.model({
    items: types.optional(types.array(WishListItem), defaultList ),
}).actions(self => ({
    add(item) {
        self.items.push(item)
    },
    remove(item) {
        //self.items.splice(self.items.indexOf(item), 1)
        destroy(item)
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
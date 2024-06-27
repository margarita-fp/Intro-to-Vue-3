const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        reduceCart(id) {
            const index = this.cart.indexOf(id)
            console.log(index)
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        }
    }
})

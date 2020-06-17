export default {
    GETPRODUCTS(state, res) {
        state.Products = res.products;
    },
    UPLOAD_FILES(state, res) {
        state.imgLink = res;
    }
}
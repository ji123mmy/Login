import axios from "axios";
import router from '../router'

export default {
    async login(context, userInfo) {
        await axios.post("/api/admin/signin", userInfo)
            .then(res => {
                if (res.data.success) {
                    console.log('Login Success');
                    router.push("/admin/products");
                }
            })
            .catch(err => {
                console.log("Login Fail", err);
            });
    },
    async logout() {
        await axios.post("/api/logout")
            .then(() => {
                console.log("Logout");
            })
            .catch(err => {
                console.log("連線失敗", err);
            });
    },
    async GetProducts({
        commit
    }) {
        await axios.get("/api/api/ji123mmy/admin/products")
            .then(res => {
                commit('GETPRODUCTS', res.data);
            })
            .catch(err => {
                console.log("連線失敗", err);
            });
    },
    async UpdateProducts(context, newProduct) {
        await axios.post("/api/api/ji123mmy/admin/product", newProduct)
            .then(res => {
                res.data.success ? console.log('新增商品成功') : console.log('新增商品失敗');
            })
            .catch(err => {
                console.log("連線失敗", err);
            });
    },
    async FixProducts(context, FixProduct) {
        await axios.put(`/api/api/ji123mmy/admin/product/${FixProduct.data.id}`, FixProduct)
            .then(res => {
                res.data.success ? console.log('修改商品成功') : console.log('修改商品失敗');
            })
            .catch(err => {
                console.log("連線失敗", err);
            });
    },
    async DeleteProducts(context, id) {
        axios.defaults.withCredentials = true;
        await axios.delete(`/api/api/ji123mmy/admin/product/${id}`)
            .then(res => {
                res.data.success ? console.log('修改商品成功') : console.log('修改商品失敗');
            })
            .catch(err => {
                console.log("連線失敗", err);
            });
    },
    async check(context, next) {
        axios.defaults.withCredentials = true;
        await axios.post("/api/api/user/check")
            .then(res => {
                res.data.success ? next() : next({ path: "/login" });
            })
            .catch(err => {
                console.log("連線失敗", err);
            });
    }
}
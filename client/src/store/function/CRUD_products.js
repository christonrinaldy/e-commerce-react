import axios from 'axios'

export function getProducts() {
    return ((dispatch,getState) => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/products',
            headers: {
                access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMTU3NzMxMX0.0xBTxJJIpqIeOpv0xC9TWPHzlLRu1LYQfgV3nD1UFrk"
            }
        })
        .then((data) => {
            dispatch({
                type: 'SET_PRODUCTS',
                payload: {
                    products: data.data
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    })
}
export function addProduct(product) {
    return ((dispatch,getState) => {
        axios({
            url: 'http://localhost:3000/products',
            method: 'POST',
            headers: {
                access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMTU3NzMxMX0.0xBTxJJIpqIeOpv0xC9TWPHzlLRu1LYQfgV3nD1UFrk"
            },
            data: product
        })
            .then(({data})=> {
                console.log(data)
                dispatch({
                    type: 'ADD_PRODUCT',
                    payload: {
                        product
                    }
                })
            })
    })
}

export function delProductById(productId) {
    return ((dispatch,getState) => {
        axios({
            url: `http://localhost:3000/products/${productId}`,
            method: 'DELETE',
            headers: {
                access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMTU3NzMxMX0.0xBTxJJIpqIeOpv0xC9TWPHzlLRu1LYQfgV3nD1UFrk"
            }
        })
            .then((data) => {
                const stateProducts = getState().productReducer.products
                let new_stateProducts = []
                stateProducts.filter((product, index) => {
                    if(product.id !== productId) {
                        new_stateProducts.push(product)
                    }
                })
                return new_stateProducts
            })
            .then((new_stateProducts) =>{
                dispatch({
                    type: 'SET_PRODUCTS',
                    payload: {
                        products: new_stateProducts
                    }
                })
            })
    })
}
export function updateProductById(productId, product) {
    return ((dispatch,getState) => {
        axios({
            url: `http://localhost:3000/products/${productId}`,
            method: 'PUT',
            headers: {
                access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMTU3NzMxMX0.0xBTxJJIpqIeOpv0xC9TWPHzlLRu1LYQfgV3nD1UFrk"
            },
            data: product
        })
          .then((data)=> {
            const stateProducts = getState().productReducer.products
            let new_stateProducts = []
            stateProducts.filter((product,index) => {
                if(product.id !== productId) {
                    new_stateProducts.push(product)
                }
            })
            new_stateProducts.push({productId,...product})
            return new_stateProducts
          })
          .then((new_stateProducts)=> {
            dispatch({
                type: 'SET_PRODUCTS',
                payload: {
                    products: new_stateProducts
                }
            })
          })
    })
}
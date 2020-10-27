import axios from 'axios'

export function adminLogin (email,password) {
    return ((dispatch,getState) => {
        axios({
            method: 'POST',
            data: {
                email,
                password
            },
            url: 'http://localhost:3000/login'
        })
          .then(({data}) => {
              dispatch({
                  type: 'SET_ADMIN',
                  payload: {
                      admin: data
                  }
              })
              dispatch({
                  type: 'SET_STATUS',
                  payload: {
                      status: true
                  }
              })
              console.log(data.data)
              localStorage.setItem('access_token',data.data.token)
          })
          .catch(err => {
              console.log(err)
              dispatch({
                  type: 'SET_STATUS',
                  payload: {
                      status: false
                  }
              })
          })
    })
}
export function adminLogout() {
    return ( async (dispatch,getState) => {
        await dispatch({
            type: 'REMOVE_ADMIN',
            payload: {
                admin: "",
                status: null,
                products: []
            }
        })
        await localStorage.removeItem("access_token")
    })
}
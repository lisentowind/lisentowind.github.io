import axios from 'axios';


axios.interceptors.request.use((res) => {
    return res
}, (err) => {
    return Promise.reject(err)
});

axios.interceptors.response.use((res) => {
    return res
}
    , (err) => {
        return Promise.reject(err)
    });
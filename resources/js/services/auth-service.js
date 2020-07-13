export default {
    register,
    login
}

function register(data) {
    return new Promise((resolve, reject) => {
        axios.post('/api/register', data).then(response => {
            if (response.status === 201) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}

function login(data) {
    return new Promise((resolve, reject) => {
        axios.post('/api/login', data).then(response => {
            if (response.status === 201) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}

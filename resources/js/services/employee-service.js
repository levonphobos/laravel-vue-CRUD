export default {
    getAllEmployeesRequest,
    addEmployee,
    getCurrentEmployee,
    updateEmployee,
    deleteEmployee
}

function getAllEmployeesRequest() {
    return new Promise((resolve, reject) => {
        axios.get('/api/employees').then(response => {
            if (response.status === 200) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}

function addEmployee(data) {
    return new Promise((resolve, reject) => {
        axios.post('/api/employees/create', data).then(response => {
            if (response.status === 200) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}

function getCurrentEmployee(id) {
    return new Promise((resolve, reject) => {
        axios.get('/api/employees/' + id).then(response => {
            if (response.status === 200) {
                resolve(response.data);
            }
        }).catch(err => {
            reject(err);
        })
    })
}

function updateEmployee(data) {
    return new Promise((resolve, reject) => {
        axios.put('/api/employees/' + data.id, data.form).then(response => {
            if (response.status === 200) {
                resolve(response.data);
            }
        }).catch(err => {
            reject(err);
        })
    })

}

function deleteEmployee(id) {
    return new Promise((resolve, reject) => {
        axios.delete('/api/employees/' + id).then(response => {
            if (response.status === 200) {
                resolve(response.data);
            }
        }).catch(err => {
            reject(err);
        })
    })
}

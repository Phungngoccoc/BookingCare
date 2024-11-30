import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';
const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {
        email: email,      // Truyền email
        password: password // Truyền password
    });
}

const handleGetAllUser = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`)
}

const createNewUserService = (data) => {
    // console.log('check data from service', data);
    return axios.post(`/api/create-new-user`, data)
}

const deleteUserService = (uid) => {
    // return axios.delete('api/delete-user',{id: data.id})
    return axios.delete('/api/delete-user', {
        data: {
            id: uid
        }
    });
}

const editUserService = (data) => {
    return axios.put('/api/edit-user', data)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDoctor = (limit) => {
    return axios.get(`/api/top-doctor?limit=${limit}`);
}

const getAllDoctor = () => {
    return axios.get('/api/get-all-doctor')
}

const saveInfoDoctor = (data) => {
    return axios.post(`/api/save-infor-doctor`, data)
}

const getDetalDoctor = (id) => {
    return axios.get(`/doctor/detail-doctor/?id=${id}`)
}

const getService = () => {
    return axios.get('/medical-service/get-all-medical-service')
}

const getFeatureDoctor = () => {
    return axios.get('/doctor/feature-doctor')
}

const getAllHospital = () => {
    return axios.get('/hospital/get-all-hospital')
}

const getDetailService = (id) => {
    return axios.get(`/medical-service/get-detail-medical-service?id=${id}`)
}

export {
    handleLoginApi,
    handleGetAllUser,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getTopDoctor,
    getAllDoctor,
    saveInfoDoctor,
    getDetalDoctor,
    getService,
    getFeatureDoctor,
    getAllHospital,
    getDetailService
}

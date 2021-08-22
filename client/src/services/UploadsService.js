import $api from '../http/axios.config'

export default class UploadsService {
    static async uploadUserImg(payload, id) {
        return $api.post(`/profile/newPicture/${id}`, payload)
    }
    static async uploadProjectImg(payload) {
        return $api.post(`/projects/newPicture`, payload)
    }
}

import $api from '../http/axios.config'

export default class ProjectService {
    static async getOneProjects(id) {
        return $api.get(`/projects/${id}`)
    }

    static async getLikeProjects(id, user) {
        return $api.patch(`/projects/${id}`, user)
    }

    static async setCommenttForProject({projectId, authorId, text, parentId}) {
        return $api.put(`/projects/${projectId}/comment`,  {authorId, text, parentId, projectId} )
    }
    static async updateViewsProject({projectId, userIp}) {
        return $api.patch(`/projects/views/${projectId}`, {userIp})
    }

    static async getAllProjects() {
        return $api.get('/projects')
    }

    static async editProject(payload) {
        return $api.put(`/projects/${payload.id}`, payload)
    }


    static async createProject(payload) {
        return $api.post(`/projects/newProject`, payload)
    }

    static async getAllComments({projectId}) {
        return $api.get(`/projects/all/${projectId}`, )
    }
}

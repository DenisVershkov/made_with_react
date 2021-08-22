import $api from "../http/axios.config"

export default class UserService {
  // static async updateSkills(id, payload) {
  //   return $api.patch(`/profile/${id}`, payload)
  // }

  static async updateInformation(id, payload) {
    return $api.patch(`/profile/${id}`, payload)
  }

  static async getUserInfo(id) {
    return $api.get(`/profile/${id}`)
  }

  static async deleteProject(id) {
    return $api.delete(`/projects/${id}`)
}
}

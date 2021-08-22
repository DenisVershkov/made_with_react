import $api from "../http/axios.config"

export default class AuthService {
  static async signUp(payload) {
    return $api.post('/api/v1/auth/signup', payload)
  }

  static async signIn(payload) {
    return $api.post('/api/v1/auth/signin', payload)
  }

  static async signOut() {
    return $api.post('/api/v1//auth/signout')
  }

  static async confirmAuth(link) {
    return $api.post(`api/v1/auth/activate/${link}`)
  }
  
  static async sendResetPasswordLetter(payload) {
    return $api.post(`api/v1/auth/resetPasswordLetter`, payload)
  }

  static async updatePassword(payload, link) {
    return $api.post(`api/v1/auth/newPassword/${link}`, payload)
  }

}

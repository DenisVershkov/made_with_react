const { REACT_APP_API_URL: host } = process.env

// export const signUp = () => `${host}/api/v1/auth/signup`
// export const signIn = () => `${host}/api/v1/auth/signin`
// export const signOut = () =>`${host}/api/v1/auth/signout`
// export const confirmAuth = (link) => `${host}/api/v1/auth/activate/${link}`
// export const checkAuth = () => `${host}/api/v1/auth/confirm`

export const uploadFile = () => `${host}/api/v1/files/newFile`
export const deleteFile = () => `${host}/api/v1/files/file`
export const editFile = () => `${host}/api/v1/files/file`

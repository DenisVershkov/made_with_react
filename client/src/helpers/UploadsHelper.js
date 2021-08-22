import UploadsService from '../services/UploadsService'
import axios from 'axios'
const {REACT_APP_CLOUDINARY_URL: host, REACT_APP_CLOUDINARY_NAME: cloudName, REACT_APP_CLOUDINARY_UPLOAD_PRESET: upload_preset} = process.env;

export default class Helpers {
  static async uploadFile(flag, file, dispatch, setError, uploadFile, id = null) {
    const formData = new FormData;
    if(flag === 'user') {
  formData.append('file', file);
  formData.append('upload_preset', `${upload_preset}`);
  try{
    const url = `${host}/${cloudName}/upload`;
    const res = await axios.post(url, formData)
        if(res.status === 200) {
          const fileInfo = res.data;
            const serverResponse = await UploadsService.uploadUserImg(fileInfo, id);
            dispatch(uploadFile(serverResponse.data))
        }
  } catch (error) {
          dispatch(setError(error))
  }
    } else {
      const urls = [];
      try{
        for (const item of file.files) {
        formData.append('file', item);
        formData.append('upload_preset', `${upload_preset}`);
        const url = `${host}/${cloudName}/upload`;
        const response = await axios.post(url, formData)
        urls.push(response.data.url)
      }
      return urls
    } catch(error){
      dispatch(setError(error))
    }
    }
  }
  }

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
   
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
   
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAILURE,
   
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
   
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAILURE,
   
    FILL_BASIC_DETAILS_REQUEST,
    FILL_BASIC_DETAILS_SUCCESS,
    FILL_BASIC_DETAILS_FAILURE,
   
    UPDATE_PROFILE_IMAGE_REQUEST,
    UPDATE_PROFILE_IMAGE_SUCESS,
    UPDATE_PROFILE_IMAGE_FAILURE,
   
    UPDATE_USERNAME_REQUEST,
    UPDATE_USERNAME_SUCCESS,
    UPDATE_USERNAME_FAIL,
   
    UPDATE_SOCIAL_ACCOUNT_REQUEST,
    UPDATE_SOCIAL_ACCOUNT_SUCCESS,
    UPDATE_SOCIAL_ACCOUNT_FAIL,  
   
} from './../constant/authConstants'


export const login =(email,password)=>async (dispatch)=>{

    try {
        dispatch({
          type: LOGIN_REQUEST,
        })
    
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
    
        const { data } = await axios.post(
          'xxxxxxxxxxxxxxxxx',
          { email, password },
          config
        )
    
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        })
    
        localStorage.setItem('userInfo', JSON.stringify(data))
      } catch (error) {
        dispatch({
          type: LOGIN_FAILURE,
          payload:error.message
        })
      }
}


export const signup=(username,email,password,history)=>async (dispatch)=>{
    dispatch({
        type:SIGNUP_REQUEST
    })
    try{

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await axios.post(
            'xxxxxxxxxxxxxxxx',
            {username, email, password },
            config
          )
      

          dispatch({
            type: SIGNUP_SUCCESS,
            payload: data,
          })
      
          localStorage.setItem('userInfo', JSON.stringify(data))
          history.push('/basic');

    }catch(error){
        dispatch({
            type:SIGNUP_FAILURE,
            payload:error.message
        })
    }

}

export const changePassword=(currentPassword,newPassword,history)=>async (dispatch)=>{
    dispatch({
        type:CHANGE_PASSWORD_REQUEST
    })
    try{

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await axios.post(
            'xxxxxxxxxxxxxxxx',
            {username, email, password },
            config
          )
      

          dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: data,
          })
      
          localStorage.setItem('userInfo', JSON.stringify(data))
          history.push('/home');

        
    }catch(error){
        dispatch({
            type:CHANGE_PASSWORD_FAILURE,
            payload:error.message
        })
    }
}

export const resetPasswords =(history,token,password)=async(dispatch)=>{
    dispatch({
        type:RESET_PASSWORD_REQUEST
    })
    try{
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await axios.post(
            'xxxxxxxxxxxxxxxxx',
            {username, email, password },
            config
          )
      
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data,
          })
      
          localStorage.setItem('userInfo', JSON.stringify(data))
          history.push('/home');

    }catch(error){
        dispatch({
            type:RESET_PASSWORD_FAILURE,
            payload:error.message

        })
    }
}

export const forgetPassword =(history,data)=>async (dispatch)=>{
    dispatch({
        type:FORGET_PASSWORD_REQUEST
    })
    try{
            const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await axios.post(
            'xxxxxxxxxxxxxxxxx',
            data,
            config
          )
      
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data,
          })
      
          localStorage.setItem('userInfo', JSON.stringify(data))
          history.push('/home');

    } catch(error){
        dispatch({
            type:FORGET_PASSWORD_FAILURE
        })
    }
}
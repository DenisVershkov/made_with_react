import './AuthForm-form.css'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
    signIn,
    signUp,
    sendResetPasswordLetter,
} from '../../redux/actions/user.ac'
import Modal from '../Modal/Modal'
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm'
import SignInContainer from './SignInContainer/SignInContainer'
import SignUpContainer from './SignUpContainer/SignUpContainer'
import { mailSentSuccessMsg } from '../../constants/constants'

const AuthForm = () => {
    const [signUpFormFields, setSignUpFormFields] = useState({
        username: '',
        email: '',
        password: '',
    })

    const [signInFormFields, setSignInFormFields] = useState({
        email: '',
        password: '',
    })

    const [forgotPasswordFormFields, setForgotPasswordFormFields] = useState({
        email: '',
    })

    const container = useRef()
    let history = useHistory()
    const dispatch = useDispatch()
    const error = useSelector((state) => state.error)
    useEffect(() => {
        error && setMessage(error)
    }, [error])
    const [modalActive, setModalActive] = useState(false)
    const [message, setMessage] = useState(null)

    function submitHandler(e, formFields, setFormFields) {
        e.preventDefault()
        let payload = Object.entries(formFields).filter((el) =>
            el[1] ? el[1].trim() : el[1]
        )
        if (payload.length) {
            if (e.target.dataset.id === 'signinForm') {
                setFormFields({
                    email: '',
                    password: '',
                })
                dispatch(signIn(formFields, history, error))
            } else if (e.target.dataset.id === 'signupForm') {
                setFormFields({
                    username: '',
                    email: '',
                    password: '',
                })
                dispatch(signUp(formFields, history, error))
            } else {
                dispatch(sendResetPasswordLetter(formFields, error))
                error ? setMessage(error) : setMessage(mailSentSuccessMsg)
                setFormFields({
                    email: '',
                })
            }
        }
    }

    function changeHandler(e, setFormFields) {
        const field = e.target.dataset.id
        const newValue = e.target.value
        setFormFields((prev) => ({ ...prev, [field]: newValue }))
    }

    function toggleHandler(e) {
        if (e.target.id === 'signUp') {
            container.current.classList.add('right-panel-active')
        } else {
            container.current.classList.remove('right-panel-active')
        }
    }

    return (
        <>
        <div className="wrapper">
                <div ref={container} className="auth-container" id="container">
                    <SignUpContainer
                        setSignUpFormFields={setSignUpFormFields}
                        submitHandler={submitHandler}
                        changeHandler={changeHandler}
                        signUpFormFields={signUpFormFields}
                    />
                    <SignInContainer
                        setSignInFormFields={setSignInFormFields}
                        submitHandler={submitHandler}
                        changeHandler={changeHandler}
                        signInFormFields={signInFormFields}
                        setModalActive={setModalActive}
                    />
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className='h1-txt' >Скорее залетай на сайт!</h1>
                                <p className='p-txt'>
                                    Если у тебя уже есть аккаунт, кликни на
                                    кнопку ниже!
                                </p>
                                <button className='auth-btn'
                                    onClick={toggleHandler}
                                    className="auth-btn ghost"
                                    id="signIn"
                                >
                                    Войти
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className='h1-txt'>Привет, прогер!</h1>
                                <p className='p-txt'>
                                    Если ты до сих пор не зарегистрировался,
                                    кликни на кнопку ниже!
                                </p>
                                <button 
                                    onClick={toggleHandler}
                                    className="auth-btn ghost"
                                    id="signUp"
                                >
                                    Зарегистрироваться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    setModalActive={setModalActive}
                    setMessage={setMessage}
                    setForgotPasswordFormFields={setForgotPasswordFormFields}
                    modalActive={modalActive}
                >
                    <ForgotPasswordForm
                        setForgotPasswordFormFields={
                            setForgotPasswordFormFields
                        }
                        submitHandler={submitHandler}
                        changeHandler={changeHandler}
                        message={message}
                        forgotPasswordFormFields={forgotPasswordFormFields}
                    />
                </Modal>
                </div>
        </>
    )
}

export default AuthForm

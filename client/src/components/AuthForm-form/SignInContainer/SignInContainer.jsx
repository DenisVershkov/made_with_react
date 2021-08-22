
const SignInContainer = ({ setSignInFormFields, setModalActive, submitHandler, changeHandler, signInFormFields }) => {

    return (
        <div className="form-container sign-in-container">
            <form className='auth-form' onSubmit={(e) => submitHandler(e, signInFormFields, setSignInFormFields)} data-id="signinForm">
                <h1 className='h1-txt'>Вход</h1>
                <input className='auth-input'
                    type="email"
                    placeholder="Email"
                    value={signInFormFields.email}
                    onChange={(e) => changeHandler(e, setSignInFormFields)}
                    data-id="email"
                />
                <input className='auth-input'
                    type="password"
                    placeholder="Password"
                    value={signInFormFields.password}
                    onChange={(e) => changeHandler(e, setSignInFormFields)}
                    data-id="password"
                />
                <a className='a-txt' onClick={() => setModalActive(true)}>Забыли пароль?</a>
                <button className='auth-btn'>Войти</button>
            </form>
        </div>
    )
}

export default SignInContainer

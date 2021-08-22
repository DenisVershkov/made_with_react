
const SignUpContainer = ({ setSignUpFormFields, submitHandler, changeHandler, signUpFormFields }) => {

    return (
        <div className="form-container sign-up-container">
            <form className='auth-form' onSubmit={(e) => submitHandler(e, signUpFormFields, setSignUpFormFields)} data-id="signupForm">
                <h1 className='h1-txt'>Создать аккаунт</h1>
                <input className='auth-input'
                    type="text"
                    placeholder="Username"
                    value={signUpFormFields.username}
                    onChange={(e) => changeHandler(e, setSignUpFormFields)}
                    data-id="username"
                />
                <input className='auth-input'
                    type="email"
                    placeholder="Email"
                    value={signUpFormFields.email}
                    onChange={(e) => changeHandler(e, setSignUpFormFields)}
                    data-id="email"
                />
                <input className='auth-input'
                    type="password"
                    placeholder="Password"
                    value={signUpFormFields.password}
                    onChange={(e) => changeHandler(e, setSignUpFormFields)}
                    data-id="password"
                />
                <button className='auth-btn'>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default SignUpContainer

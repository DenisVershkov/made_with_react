import './ForgotPasswordForm.css'

const ForgotPasswordForm = ({ setForgotPasswordFormFields, forgotPasswordFormFields, submitHandler, changeHandler, message }) => {

    return (
        <div className="modalka_wrapper">
            <h2 className='modalka-txt'>Введите email, который вы указывали при регистрации</h2>
            <form onSubmit={(e) => submitHandler(e, forgotPasswordFormFields, setForgotPasswordFormFields)}>
                <div className="modalka_form_wrapper">
                    <input
                        className="auth-input modalka_input"
                        placeholder="Email"
                        value={forgotPasswordFormFields.email}
                        onChange={(e)=> changeHandler(e, setForgotPasswordFormFields)}
                        type="email"
                        data-id="email"
                    />
                    <button data-id="email" className="auth-btn">
                        Подтвердить
                    </button>
                </div>
                <span className='span-txt'>
                    {message && message}
                </span>
            </form>
        </div>
    )
}

export default ForgotPasswordForm

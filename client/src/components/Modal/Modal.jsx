import './Modal.css'

const Modal = ({ setMessage, setForgotPasswordFormFields, setModalActive, modalActive, children }) => {
    return (
        <div
            className={modalActive ? 'modalka active' : 'modalka'}
            onClick={() => {
              setModalActive(false)
              setForgotPasswordFormFields({email: ''})
              setMessage(null)
            }
            }
        >
            <div
                className={
                  modalActive ? 'modalka__content active' : 'modalka__content'
                }
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal

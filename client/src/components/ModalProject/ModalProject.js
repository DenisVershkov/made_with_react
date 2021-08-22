import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    projectimgmodal: {
        backgroundColor: theme.palette.background.paper,
        height: 700,
        width: 900,
    },
}))

export default function ModalProject({ handleClose, open, image }) {
    const classes = useStyles()

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div>
                        <img
                            className={classes.projectimgmodal}
                            src={`${image}`}
                            alt="project"
                        />
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

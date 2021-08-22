import { useState } from 'react';
import InformationForm from './InformationForm/InformationForm';
import SkillsForm from './SkillsForm/SkillsForm';
import styles from './styles.module.css'


export default function UserEditForm() {
    const [page, setPage] = useState(0)

    function nextPageButtonHandler(e) {
        setPage((prev) => (prev = 1))
    }

    function previousPageButtonHandler(e) {
        setPage((prev) => (prev = 0))
    }

    console.log(page)
    return (
        <div className={styles.formContainer}>
            {page === 0 ? (
                <InformationForm
                    nextPageButtonHandler={nextPageButtonHandler}
                    previousPageButtonHandler={previousPageButtonHandler}
                />
            ) : (
                <SkillsForm
                    nextPageButtonHandler={nextPageButtonHandler}
                    previousPageButtonHandler={previousPageButtonHandler}
                />
            )}
        </div>
    )
}

import styles from './style.module.css'
import { Link } from 'react-router-dom'

const Card = ({ _id, image, name, likes, about }) => {
    return (
        <div key={_id} className={`col ${styles.col}`}>
            <div className={`card ${styles.card}`}>
                <div className={`picture ${styles.picture}`}>
                    <Link to={`/project/${_id}`}>
                        <img
                            src={image}
                            className="card-img-top"
                            alt={name}
                        />
                    </Link>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{about}</p>
                </div>
                <div
                    className={`cardfooter ${styles.cardfooter}`}
                >
                    <div>
                        <p>#хештег</p>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/ios-glyphs/24/000000/visible--v1.png" alt="img"/>
                        <span
                            className={`views ${styles.views}`}
                        >
                            {likes}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

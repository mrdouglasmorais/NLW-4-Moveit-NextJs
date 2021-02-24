import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/mrdouglasmorais.png" alt="img profile" />
            <div>
                <strong>Douglas Morais</strong>
                <p>
                    <img src="icons/level.svg" alt="level icon" />
                    Level 1
                </p>
            </div>
        </div>
    );
}
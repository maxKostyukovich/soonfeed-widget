import React from "react";
import styles from './Header.module.sass'

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <h1 className={styles.title}>Soonfeed Europe (widget)</h1>
            </header>
        );
    }
}

export default Header;

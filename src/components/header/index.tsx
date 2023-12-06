import React from 'react';
import styles from './header.module.scss';
import PageHeader from "./page-header";

interface HeaderProps {
}

const Header = (
) => {


    return (
        <div className={styles.Header}>
            <PageHeader/>
        </div>
    )
}

export default Header;

import React, { FC } from 'react';
import styles from './nav-item.module.scss';
import {Tooltip} from "@mantine/core";

interface NavItemProps {
    label:string;
    alphabet:string;
}

export const NavItem = ({label,alphabet}:NavItemProps) => {


    return (
        <Tooltip label={label} position={'right'} withArrow={false}>
        <div className={`${styles.NavItem}`}>
            <span className={styles.border}></span>
            <span className={"icon24"}>{alphabet}</span>
        </div>
        </Tooltip>
    )
}

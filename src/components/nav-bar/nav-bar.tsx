
import React from 'react';
import styles from './nav-bar.module.scss';
import "../../styles/size.scss"
import {NavItem} from "components/nav-item/nav-item";
import {Avatar} from "@mantine/core";

interface NavBarProps {}


type navItem = {
    alphabet:string,
    label:string,
}


const NavItems = ():navItem[] => {

    const items:navItem[] = [
        {
            alphabet: "D",
            label: "Dhoni"
        },
        {
            alphabet: "K",
            label: "Kohli"
        },
        {
            alphabet: "R",
            label: "Rohith"
        },
        {
            alphabet: "S",
            label: "Smith"
        },
    ]

    return items;
}

const NavBar = (props:NavBarProps) => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.header}>
                <Avatar
                    radius={"xs"}
                    color={"yellow"}
                    size={"sm"}
                >
                    CSK
                </Avatar>
            </div>
            <div className={styles.body}>
                {
                    NavItems().map(navItem => {
                        return (
                            <NavItem key={navItem.label} label={navItem.label} alphabet={navItem.alphabet}/>
                        )
                    })
                }
            </div>
            {/*<div className={styles.footer}>*/}
            {/*    <Link to={`/${BaseRoutes.SETTINGS}`}>*/}
            {/*        <NavItem label={"Settings"} icon={"settingsOutline"}/>*/}
            {/*    </Link>*/}
            {/*    <Link to={'/settings'}>*/}
            {/*        <NavItem label={"Settings"} icon={"logoutOutline"}/>*/}
            {/*    </Link>*/}
            {/*    <Link to={'/profile'} className={styles.profile}>*/}
            {/*        <img src={avatar} className={"icon32 mt-8"}/>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    )
}

export default NavBar;

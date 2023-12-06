import styles from "./header.module.scss";
import React from "react";
import {useMantineColorScheme} from "@mantine/core";
import ToogleColorScheme from "../toogle-color-scheme/toogle-color-scheme";

interface PageHeaderProps {

}

const PageHeader = ({}:PageHeaderProps) => {

    const defaultLocale:string = "Task Board";

    const {colorScheme,toggleColorScheme}=useMantineColorScheme();

    return (
        <>
            <div className={styles.right}>
                <span
                    className={styles.title}
                >
                    { defaultLocale }
                </span>
            </div>
            <ToogleColorScheme/>
        </>
    )
}

export default PageHeader;
import React, { FC } from 'react';
import styles from './toogle-color-scheme.module.scss';
import {ActionIcon, useComputedColorScheme, useMantineColorScheme} from "@mantine/core";
import {IconMoon, IconSun} from "@tabler/icons-react";

interface ToogleColorSchemeProps {}

const ToogleColorScheme = () => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
        >
            <IconMoon className={`${styles.icon} ${styles.light}`} />
            <IconSun className={`${styles.icon} ${styles.dark}`} />
        </ActionIcon>
    );
}

export default ToogleColorScheme;

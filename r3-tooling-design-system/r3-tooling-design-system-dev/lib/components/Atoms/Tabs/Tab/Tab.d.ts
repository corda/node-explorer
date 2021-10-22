import React, { ReactNode } from 'react';
import './Tab.scss';
interface Props {
    name: string | ReactNode;
    className?: string;
    selected?: boolean;
    variant?: 'dark' | 'light';
    onChange?: () => void;
    onTabChange?: () => void;
    [x: string]: any;
}
declare const Tab: React.FC<Props>;
export default Tab;

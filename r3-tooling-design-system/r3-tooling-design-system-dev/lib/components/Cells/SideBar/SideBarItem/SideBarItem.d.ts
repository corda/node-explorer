import React, { ReactElement, ReactNode } from 'react';
import './SideBarItem.scss';
interface Props {
    children?: ReactNode;
    className?: string;
    icon?: string;
    active?: boolean;
    level?: number;
    multipleActiveItems?: boolean;
    title: string | ReactElement | ReactNode;
    [x: string]: any;
}
declare const SideBarItem: React.FC<Props>;
export default SideBarItem;

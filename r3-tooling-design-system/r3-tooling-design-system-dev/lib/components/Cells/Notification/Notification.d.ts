import React, { Component, ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Notification.scss';
export interface ContextProps {
    currentId: string | null;
    dismiss: (string: any) => void;
}
declare class Notification extends Component {
    currentId: any;
    notify: (message: string, title: string, variant?: 'info' | 'danger' | 'warning' | 'success', autoClose?: number | false) => React.ReactText;
    addNotification: (element: JSX.Element, autoClose?: number | false, variant?: 'info' | 'danger' | 'warning' | 'success') => React.ReactText;
    dismiss: (id: string) => void;
    render(): ReactNode;
}
export default Notification;
export declare const NotificationService: Notification;

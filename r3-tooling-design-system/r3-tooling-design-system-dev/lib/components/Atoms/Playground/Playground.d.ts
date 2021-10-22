import { Component, ReactNode } from 'react';
import './Playground.scss';
interface ConfigProps {
    name: string;
    [x: string]: any;
}
interface Props {
    config?: ConfigProps;
}
declare type Properties = Record<string, unknown>;
declare class Playground extends Component<Props> {
    state: any;
    componentDidMount(): void;
    changeCheckboxHandler: (key: string | number, props: Properties, children: boolean) => void;
    changeRadioHandler: (key: any, value: any) => void;
    changeSelectHandler: (key: any, value: any) => void;
    checkboxPropsHandler: (key: string | number, props: Properties, isChildren: boolean) => void;
    radioPropsHandler: (key: any, value: any) => void;
    selectPropsHandler: (key: any, value: any) => void;
    render(): ReactNode;
}
export default Playground;

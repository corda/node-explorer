export declare const removeDuplicateStringsInArray: (array: Array<string>) => Array<string>;
export declare const R3_DESIGN_SYSTEM_NAME = "r3-tooling-design-system";
declare global {
    interface Window {
        r3DesignSystemName: {
            openedComponents: Array<string>;
        };
    }
}
export declare const R3DesignSystemStore: {
    init: () => void;
    addOpenedComponent: (componentId: string) => void;
    popOpenedComponent: () => void;
    getOpenedComponents: () => Array<string>;
    getOpenedComponentIndex: (componentId: string, baseNumber?: number) => number;
    getLastOpenedComponent: () => string;
};

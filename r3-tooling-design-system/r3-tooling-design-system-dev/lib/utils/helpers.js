export var removeDuplicateStringsInArray = function (array) {
    if (array.length) {
        return Array.from(new Set(array));
    }
    return [];
};
export var R3_DESIGN_SYSTEM_NAME = 'r3-tooling-design-system';
export var R3DesignSystemStore = {
    init: function () {
        if (!window[R3_DESIGN_SYSTEM_NAME]) {
            window[R3_DESIGN_SYSTEM_NAME] = {
                openedComponents: [],
                globalEvents: [],
            };
        }
    },
    addOpenedComponent: function (componentId) {
        R3DesignSystemStore.init();
        window[R3_DESIGN_SYSTEM_NAME].openedComponents.push(componentId);
    },
    popOpenedComponent: function () {
        R3DesignSystemStore.init();
        return window[R3_DESIGN_SYSTEM_NAME].openedComponents.pop();
    },
    getOpenedComponents: function () {
        R3DesignSystemStore.init();
        return window[R3_DESIGN_SYSTEM_NAME].openedComponents;
    },
    getOpenedComponentIndex: function (componentId, baseNumber) {
        R3DesignSystemStore.init();
        var baseLayerIndex = baseNumber > -1 ? baseNumber : 0;
        var componentLayerPosition = window[R3_DESIGN_SYSTEM_NAME].openedComponents.findIndex(function (id) {
            return id === componentId;
        });
        return componentLayerPosition !== -1
            ? baseLayerIndex + componentLayerPosition
            : componentLayerPosition;
    },
    getLastOpenedComponent: function () {
        return window[R3_DESIGN_SYSTEM_NAME].openedComponents[window[R3_DESIGN_SYSTEM_NAME].openedComponents.length - 1];
    },
};
//# sourceMappingURL=helpers.js.map
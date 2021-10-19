var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import LoadingSkeleton, { SkeletonTheme } from 'react-loading-skeleton';
var previewConfig = {
    name: 'Skeleton',
    defaultState: {
        block: false,
        circle: false,
        componentProps: {
            lines: 5,
            width: 500,
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'block',
                properties: {
                    height: 100,
                },
            },
            {
                name: 'circle',
                properties: {
                    circle: true,
                    height: 100,
                    width: 100,
                },
            },
        ],
    },
};
var Skeleton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, circle = _a.circle, lines = _a.lines, height = _a.height, width = _a.width;
    return (_jsx(SkeletonTheme, __assign({ color: "#E9ECF2", highlightColor: "#D3D8E5" }, { children: _jsx(LoadingSkeleton, { duration: 1, className: className, circle: circle, count: lines, height: height, width: width }, void 0) }), void 0));
};
export default Skeleton;
export { previewConfig };
//# sourceMappingURL=Skeleton.js.map
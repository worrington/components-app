import React from 'react';
import * as HeroIconsOutline from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';
/**
 * `Icon` is a reusable React component that renders an icon from the
 * `@heroicons/react` library. This component allows for customization
 * of the icon's size, color, and additional styles.
 */
var Icon = function (_a) {
    var name = _a.name, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.color, color = _c === void 0 ? "light" : _c, _d = _a.width, width = _d === void 0 ? 16 : _d, _e = _a.height, height = _e === void 0 ? 16 : _e, _f = _a.variant, variant = _f === void 0 ? "outline" : _f;
    var IconComponent = variant === "outline" ? HeroIconsOutline[name] : HeroIconsSolid[name];
    if (!IconComponent) {
        console.warn("Icon with name ".concat(name, " does not exist."));
        return null;
    }
    return (React.createElement(IconComponent, { className: "".concat(className, " text-").concat(color), style: {
            width: width,
            height: height,
        } }));
};
export default Icon;

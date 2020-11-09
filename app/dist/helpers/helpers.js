"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandHasGreeting = (command) => {
    if (command.includes('hi')) {
        return true;
    }
    if (command.includes('hey')) {
        return true;
    }
    if (command.includes('hello')) {
        return true;
    }
    if (command.includes('welcome')) {
        return true;
    }
    return false;
};
exports.getRand = () => {
    return ("" + Math.random()).substring(2);
};
exports.substringsMatch = (stringA, stringB) => {
    const _stringA = (stringA || "").trim().toLowerCase();
    const _stringB = (stringB || "").trim().toLowerCase();
    const _as = _stringA.split(' ');
    const _bs = _stringB.split(' ');
    if (!_stringA || !_stringB) {
        return false;
    }
    for (const _a of _as) {
        if (_a.length > 5 && _stringB.includes(_a)) {
            console.log(` ~ Found ${_a} in ${_stringB}`);
            return true;
        }
    }
    for (const _b of _bs) {
        if (_b.length > 5 && _stringA.includes(_b)) {
            console.log(` ~ Found ${_b} in ${_stringA}`);
            return true;
        }
    }
    return false;
};
//# sourceMappingURL=helpers.js.map
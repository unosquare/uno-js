"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toTitleCase(title) {
    const words = title.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
exports.toTitleCase = toTitleCase;

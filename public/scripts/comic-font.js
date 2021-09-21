"use strict";
document.addEventListener("DOMContentLoaded", () => {
    if (
        (!window.matchMedia("screen").matches && !window.matchMedia("print").matches)
        || /bot|crawl|spider/i.test(navigator.userAgent)
    ) {
        return;
    }
    const ALPHA_REGEX = /^[a-hj-z]$/i;
    const COMIXIFY_CHARS = {};
    const comixify = text => {
        let result = "";
        const n = text.length;
        for (let i = 0; i < n; i++) {
            const c = text.charAt(i);
            if (ALPHA_REGEX.test(c)) {
                const cLower = c.toLowerCase();
                if (COMIXIFY_CHARS[cLower]) {
                    result += cLower;
                    delete COMIXIFY_CHARS[cLower];
                } else {
                    result += c.toUpperCase();
                    COMIXIFY_CHARS[cLower] = true;
                }
            } else {
                result += c;
            }
        }
        return result;
    }
    const iter = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while (node = iter.nextNode()) {
        node.textContent = comixify(node.textContent);
    }
});
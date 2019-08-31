"use strict";
(() => {
    const SVG_NS = "http://www.w3.org/2000/svg";
    const drawLines = () => {
        const svg = document.getElementById("cell-lines-graphics");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        svg.setAttributeNS(null,  "viewBox", `0 0 ${width} ${height}`);
        const drawLine = (x1, y1, x2, y2) => {
            const path = document.createElementNS(SVG_NS, "path");
            path.setAttributeNS(null, "d", `M${x1} ${y1}L${x2} ${y2}Z`);
            svg.appendChild(path);
        };
        const cells = [...document.getElementsByClassName("cell")]
            .map(element => element.getBoundingClientRect())
            .map(({ bottom, left, top, right }) => ({ bottom, left, top, right }));
        const n = cells.length;
        const bottom = cells.reduce((prev, cell) => isNaN(prev) ? cell.bottom : Math.max(prev, cell.bottom), NaN);
        const top = cells.reduce((prev, cell) => isNaN(prev) ? cell.top : Math.min(prev, cell.top), NaN);
        let lastHLine = NaN;
        for (let i = 0; i < n; i++) {
            const a = cells[i];
            if (a.bottom !== bottom && a.bottom !== lastHLine) {
                drawLine(0, a.bottom, width, a.bottom);
                lastHLine = a.bottom;
            }
            const b = (i < n - 1) ? cells[i + 1] : null;
            if (b && (a.top === b.top)) {
                const coords = [a.right, a.top, b.left, b.bottom];
                if (a.top === top) {
                    coords[1] = 0;
                }
                if (a.bottom === bottom) {
                    coords[3] = document.documentElement.clientHeight;
                }
                drawLine(...coords);
            }
        }
    }
    window.addEventListener("load", drawLines);
    window.addEventListener("resize", drawLines);
})();


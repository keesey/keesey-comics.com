"use strict";
(() => {
    const THICKNESS = 5;
    const WIGGLE = THICKNESS / 2;
    const SVG_NS = "http://www.w3.org/2000/svg";
    let randomIndex = 0;
    const randomNumbers = [];
    const random = () => {
        while (randomIndex >= randomNumbers.length) {
            randomNumbers.push(Math.random());
        }
        return randomNumbers[randomIndex++];
    }
    const drawLines = () => {
        randomIndex = 0;
        const svg = document.getElementById("cell-lines-graphics");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        const width = window.innerWidth;
        const height = window.innerHeight;
        svg.setAttributeNS(null,  "viewBox", `0 0 ${width} ${height}`);
        const drawLine = (x1, y1, x2, y2) => {
            const path = document.createElementNS(SVG_NS, "path");
            const acx1 = (x1 * 2 / 3 + x2 / 3 + (random() - 0.5) * WIGGLE - THICKNESS / 2).toFixed(2);
            const acy1 = (y1 * 2 / 3 + y2 / 3 + (random() - 0.5) * WIGGLE - THICKNESS / 2).toFixed(2);;
            const acx2 = (x1 / 3 + x2 * 2 / 3 + (random() - 0.5) * WIGGLE - THICKNESS / 2).toFixed(2);;
            const acy2 = (y1 / 3 + y2 * 2 / 3 + (random() - 0.5) * WIGGLE - THICKNESS / 2).toFixed(2);;
            const bcx1 = (x1 * 2 / 3 + x2 / 3 + (random() - 0.5) * WIGGLE + THICKNESS / 2).toFixed(2);
            const bcy1 = (y1 * 2 / 3 + y2 / 3 + (random() - 0.5) * WIGGLE + THICKNESS / 2).toFixed(2);;
            const bcx2 = (x1 / 3 + x2 * 2 / 3 + (random() - 0.5) * WIGGLE + THICKNESS / 2).toFixed(2);;
            const bcy2 = (y1 / 3 + y2 * 2 / 3 + (random() - 0.5) * WIGGLE + THICKNESS / 2).toFixed(2);;
            path.setAttributeNS(null, "d", `M${x1} ${y1}L${
                (x1 + (random() - 0.5) * WIGGLE - THICKNESS / 2).toFixed(2)
            } ${
                (y1 + (random() - 0.5) * WIGGLE - THICKNESS / 2).toFixed(2)
            }C${acx1} ${acy1} ${acx2} ${acy2} ${
                (x2 + (random() - 0.5) * WIGGLE - THICKNESS / 2).toFixed(2)
            } ${
                (y2 + (random() - 0.5) * WIGGLE - THICKNESS / 2).toFixed(2)
            }L${x2} ${y2}L${
                (x2 + (random() - 0.5) * WIGGLE + THICKNESS / 2).toFixed(2)
            } ${
                (y2 + (random() - 0.5) * WIGGLE + THICKNESS / 2).toFixed(2)
            }C${bcx2} ${bcy2} ${bcx1} ${bcy1} ${
                (x1 + (random() - 0.5) * WIGGLE + THICKNESS / 2).toFixed(2)
            } ${
                (y1 + (random() - 0.5) * WIGGLE + THICKNESS / 2).toFixed(2)
            }Z`);
            svg.appendChild(path);
        };
        const cells = [...document.getElementsByClassName("cell")];
        const rects = cells.map(element => element.getBoundingClientRect());
        const n = cells.length;
        const bottom = rects.reduce((prev, cell) => isNaN(prev) ? cell.bottom : Math.max(prev, cell.bottom), NaN);
        const top = rects.reduce((prev, cell) => isNaN(prev) ? cell.top : Math.min(prev, cell.top), NaN);
        let lastHLine = NaN;
        const adjustCoords = (coords, rect) => {
            if (rect.top === top) {
                coords[1] = -THICKNESS;
            }
            if (rect.bottom === bottom) {
                coords[3] = document.documentElement.clientHeight + THICKNESS;
            }
        };
        for (let i = 0; i < n; i++) {
            const a = rects[i];
            const cell = cells[i];
            if (cell.classList.contains("cell-border-left")) {
                const coords = [a.left, a.top, a.left, a.bottom];
                adjustCoords(coords, a);
                drawLine(...coords);
            }
            if (a.bottom !== bottom && a.bottom !== lastHLine) {
                drawLine(-THICKNESS, a.bottom, width + THICKNESS, a.bottom);
                lastHLine = a.bottom;
            }
            const b = (i < n - 1) ? rects[i + 1] : null;
            if (b && (a.top === b.top)) {
                const coords = [a.right, a.top, b.left, b.bottom];
                adjustCoords(coords, a);
                drawLine(...coords);
            } else if (cell.classList.contains("cell-border-right")) {
                const coords = [a.right, a.top, a.right, a.bottom];
                adjustCoords(coords, a);
                drawLine(...coords);
            }
        }
    }
    window.addEventListener("load", drawLines);
    window.addEventListener("resize", drawLines);
    window.addEventListener("scroll", drawLines);
})();


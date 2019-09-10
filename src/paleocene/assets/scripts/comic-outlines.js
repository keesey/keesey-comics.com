"use strict";
(() => {
    const MARGIN = 6;
    const BORDER_RADIUS = 24;
    const WIGGLE = 9;
    const SVG_NS = "http://www.w3.org/2000/svg";
    let randomIndex = 0;
    const randomNumbers = [];
    const random = () => {
        while (randomIndex >= randomNumbers.length) {
            randomNumbers.push(Math.random());
        }
        return randomNumbers[randomIndex++];
    }
    const wiggle = (...nums) => nums.map(n => parseFloat((n + WIGGLE * random() - WIGGLE / 2).toFixed(1)));
    const draw = () => {
        randomIndex = 0;
        const svg = document.getElementById("cell-lines-graphics");
        while (svg.lastChild) {
            svg.removeChild(svg.lastChild);
        }
        const width = window.innerWidth;
        const height = window.innerHeight;
        svg.setAttributeNS(null, "viewBox", `0 0 ${width} ${height}`);
        [...document.getElementsByClassName("cell")]
            .map(element => element.getBoundingClientRect())
            .filter(rect => rect.top !== rect.bottom && rect.left !== rect.right)
            .forEach(({ bottom, left, right, top }) => {
                const path = document.createElementNS(SVG_NS, "path");
                const topCenter = wiggle((left + right) / 2, top + MARGIN);
                const bottomCenter = wiggle((left + right) / 2, bottom - MARGIN);
                const leftCenter = wiggle(left + MARGIN, (top + bottom) / 2);
                const rightCenter = wiggle(right + MARGIN, (top + bottom) / 2);
                const topLeftIn = wiggle(left + BORDER_RADIUS, top + MARGIN);
                const topLeftOut = wiggle(left + MARGIN, top + BORDER_RADIUS);
                const bottomLeftIn = wiggle(left + BORDER_RADIUS, bottom - MARGIN);
                const bottomLeftOut = wiggle(left + MARGIN, bottom - BORDER_RADIUS);
                const topRightIn = wiggle(right - BORDER_RADIUS, top + MARGIN);
                const topRightOut = wiggle(right - MARGIN, top + BORDER_RADIUS);
                const bottomRightIn = wiggle(right - BORDER_RADIUS, bottom - MARGIN);
                const bottomRightOut = wiggle(right - MARGIN, bottom - BORDER_RADIUS);
                path.setAttributeNS(
                    null,
                    "d",
                    `M${topLeftIn[0]} ${top - 1
                    }H${right + 1}V${bottom + 1}H${left - 1}V${top - 1
                    }H${topLeftIn[0]}V${topLeftIn[1]
                    }Q${topLeftOut[0]} ${topLeftIn[1]} ${topLeftOut.join(" ")
                    }Q${leftCenter.join(" ")} ${bottomLeftOut.join(" ")
                    }Q${bottomLeftOut[0]} ${bottomLeftIn[1]} ${bottomLeftIn.join(" ")
                    }Q${bottomCenter.join(" ")} ${bottomRightIn.join(" ")
                    }Q${bottomRightOut[0]} ${bottomRightIn[1]} ${bottomRightOut.join(" ")
                    }Q${rightCenter.join(" ")} ${topRightOut.join(" ")
                    }Q${topRightOut[0]} ${topRightIn[1]} ${topRightIn.join(" ")
                    }Q${topCenter.join(" ")} ${topLeftIn.join(" ")
                    }V${top - 1}Z`,
                );
                svg.appendChild(path);
            });
    }
    const refresh = () => {
        window.requestAnimationFrame(draw);
    }
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh, { useCapture: true });
    window.addEventListener("scroll", refresh, { useCapture: true });
})();


import { FC } from "react"
import styles from "./index.module.scss"
export interface Props {
    children?: string | null;
    italic?: boolean;
}
const ALPHA_REGEX = /^[a-hj-z]$/i;
const comixify = (text: string) => {
    const chars: Record<string, true> = {};
    let result = "";
    const n = text.length;
    for (let i = 0; i < n; i++) {
        const c = text.charAt(i);
        if (ALPHA_REGEX.test(c)) {
            const cLower = c.toLowerCase();
            if (chars[cLower]) {
                result += cLower;
                delete chars[cLower];
            } else {
                result += c.toUpperCase();
                chars[cLower] = true;
            }
        } else {
            result += c;
        }
    }
    return result;
}
const ComicText: FC<Props> = ({ children, italic }) => {
    if (!children) {
        return null;
    }
    return (
        <>
            <span className={[styles.regular, italic ? styles.italic : null].filter(Boolean).join(" ")}>{children}</span>
            <span className={[styles.comics, italic ? styles.italic : null].filter(Boolean).join(" ")}>{comixify(children)}</span>
        </>
    );
}
export default ComicText;

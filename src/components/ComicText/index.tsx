import { FC } from "react"
import styles from "./index.module.scss"
export interface Props {
    children?: string | null;
    emphatic?: boolean;
    lang?: string;
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
const ComicText: FC<Props> = ({ children, emphatic, lang }) => {
    if (!children) {
        return null;
    }
    if (lang === "ko") {
        return (
            <span lang={lang} className={[styles.regular, emphatic ? styles.emphatic : null].filter(Boolean).join(" ")}>{children}</span>
        )
    }
    return (
        <>
            <span lang={lang} className={[styles.regular, emphatic ? styles.emphatic : null].filter(Boolean).join(" ")}>{children}</span>
            <span lang={lang} className={[styles.comics, emphatic ? styles.emphatic : null].filter(Boolean).join(" ")}>{comixify(children)}</span>
        </>
    );
}
export default ComicText;

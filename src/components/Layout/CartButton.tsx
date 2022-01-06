/* eslint-disable @next/next/no-img-element */
import "animate.css";
import Link from "next/link";
import { useContext, useEffect, useMemo, useState, VFC } from "react";
import Context from "~/cart/context/order/Context";
import useAnimation from "~/hooks/useAnimation";
import styles from "./CartButton.module.scss";
import useLogoColor from "./useLogoColor";
const CartButton: VFC = () => {
    const [order] = useContext(Context) ?? [];
    const count = useMemo(() => {
        if (!order?.items.length) {
            return 0;
        }
        return order.items.reduce<number>((prev, item) => prev + item.quantity, 0);
    }, [order]);
    const logoColor = useLogoColor();
    const [animationRef, animate] = useAnimation<HTMLAnchorElement>("flash");
    const [lastCount, setLastCount] = useState(count);
    useEffect(() => {
        if (count && count !== lastCount) {
            setLastCount(count);
            animate();
        }
    }, [animate, count, lastCount]);
    return (
        <Link href="/cart">
            <a
                className={styles.main}
                role="button"
                title="Your Cart"
                ref={animationRef}
            >
                <img
                    src={`/images/icons/${logoColor}/cart.svg`}
                    width={24.425}
                    height={21}
                    alt="Shopping Cart"
                />
                {count > 0 && <span className={styles.count}>{count}</span>}
            </a>
        </Link>
    );
};
export default CartButton;
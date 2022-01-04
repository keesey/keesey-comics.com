import Image from "next/image";
import Link from "next/link";
import { useCallback, useContext, VFC } from "react";
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS";
import Context from "~/cart/context/order/Context";
import styles from "./index.module.scss";
export interface Props {
    id: string;
    noTitle?: boolean;
}
const Product: VFC<Props> = ({ id, noTitle }) => {
    const [, dispatch] = useContext(Context) ?? [];
    const handleAddToCartClick = useCallback(() => {
        dispatch?.({ type: "INCREMENT_QUANTITY", payload: { productId: id } });
    }, [dispatch, id]);
    const product = PRODUCTS_MAP[id];
    if (!product) {
        return null;
    }
    const href = product.path ?? `/products/${id}`;
    const imgSrc = product.imagePath ?? `/images/products/${id}.png`;
    return (
        <section className={styles.main}>
            <h3
                className={noTitle ? styles.hidden : undefined}
                dangerouslySetInnerHTML={{ __html: product.html }}
            />
            <Link href={href}>
                <a>
                    <Image src={imgSrc} width={172} height={263} alt={product.name} />
                </a>
            </Link>
            <nav className={styles.controls}>
                <Link href={href} passHref>
                    <a role="button">More Info</a>
                </Link>
                <a role="button" onClick={handleAddToCartClick}>
                    Add to Cart
                </a>
            </nav>
        </section>
    );
};
export default Product;

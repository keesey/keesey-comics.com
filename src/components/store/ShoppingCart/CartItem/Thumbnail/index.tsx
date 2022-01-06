import Image from "next/image";
import Link from "next/link";
import { VFC } from "react";
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS";
import { Product } from "~/cart/models/Product";
export interface Props {
    product: Product;
}
const Thumbnail: VFC<Props> = ({ product }) => {
    const href = product.path ?? `/products/${product.id}`;
    const imgSrc = product.imagePath ?? `/images/products/${product.id}.png`;
    return (
        <Link href={href}>
            <a>
                <Image
                    layout="fixed"
                    src={imgSrc}
                    width={86}
                    height={132}
                    alt={product.name}
                />
            </a>
        </Link>
    );
};
export default Thumbnail;

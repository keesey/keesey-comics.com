import { useMemo, VFC } from "react";
import { ItemList, ListItem } from "schema-dts";
import Schema from "./Schema";
export interface Props {
    urls: Iterable<string>;
}
const ItemListSchema: VFC<Props> = ({ urls }) => {
    const thing = useMemo<ItemList>(
        () => ({
            "@type": "ItemList",
            itemListElement: [...urls].map((url, position) => ({
                "@type": "ListItem",
                position,
                url,
            } as ListItem))
        }),
        [urls],
    );
    return <Schema thing={thing} />;
};
export default ItemListSchema;

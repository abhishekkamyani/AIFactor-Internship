import _ from "lodash";

export default function AddRemoveLayout({
    className = "layout",
    cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight = 100,
}) {

    const [items, setItems] = useState(
        Array.apply(null, Array(5)).map(function () { }).map((_, index, arr) => ({
            i: index.toString(),
            x: index * 2,
            y: 0,
            w: 2,
            h: 2,
            add: index === arr.length - 1,
        }))
    )
    counter = items.length;

    const onAddItem = () => {
        setItems([
            ...items,
            {
                i: "n" + counter,
                x: (items.length * 2) % (mergedProps.cols.lg || 12),
                y: Infinity, // puts it at the bottom
                w: 2,
                h: 2,
            }
        ])
    }

    const onRemoveItem = (i) => {
        setItems(_.reject(items, {i, i}));
    }

    return <div>AddRemoveLayout</div>;
}
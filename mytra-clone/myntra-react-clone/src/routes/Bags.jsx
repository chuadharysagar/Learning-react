import BagSummery from "../components/BagSummery";
import Bagitems from "../components/Bagitems";
import { useSelector } from "react-redux";

const Bag = () => {
    const bagItems = useSelector((store) => store.bag);
    const items = useSelector((store) => store.items);
    const finalItems = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0;
    });

    return <>

        <main>
            <div className="bag-page">
                {finalItems.map(item => <div className="bag-items-container" key={item.id}> <Bagitems item={item} /></div>)}
                { finalItems.length !== 0 && <BagSummery/>}
            </div>
        </main>

    </>
}

export default Bag;
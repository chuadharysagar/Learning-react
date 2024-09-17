import { useSelector } from 'react-redux';


const bagSummery = () => {
    const bagItems = useSelector((store) => store.bag);
    const items = useSelector((store) => store.items);
    const finalItems = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0;
    });

    const CONVINIENCE_FEE = 99;
    let totalItem = finalItems.length;
    let totalMRP = 0;
    let currentPrice = 0;

    for (let i = 0; i < finalItems.length; i++) {
        totalMRP += finalItems[i].original_price;
        currentPrice += finalItems[i].current_price;
    }

    let totalDiscount = totalMRP - currentPrice;
    let finalPayment = currentPrice + CONVINIENCE_FEE;

    // const bagSummery = {
    //     totalItem: 2,
    //     totalMRP: 2000,
    //     totalDiscount: 222,
    //     finalPayment: 1200,
    // }

    return <>
        <div className="bag-summary">
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
                <div className="price-bagSummery">
                    <span className="price-bagSummery-tag">Total MRP</span>
                    <span className="price-bagSummery-value">₹{totalMRP}</span>
                </div>
                <div className="price-bagSummery">
                    <span className="price-bagSummery-tag">Discount on MRP</span>
                    <span className="price-bagSummery-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div className="price-bagSummery">
                    <span className="price-bagSummery-tag">Convenience Fee</span>
                    <span className="price-bagSummery-value">₹99</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-bagSummery-tag">Total Amount</span>
                    <span className="price-bagSummery-value">₹{finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </div>

    </>

}


export default bagSummery;
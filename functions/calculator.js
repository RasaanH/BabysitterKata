import ratesReturn from './ratesReturn';
const calculator = (startObject, endObject) => {
    console.log("calulcator running");
    const timeRates = ratesReturn();

    if (!startObject.hasOwnProperty("index") || !endObject.hasOwnProperty("index")) {
        // console.log(1);
        return ""
    }

    if (startObject.index === endObject.index) {
        // console.log(2);
        return "$0.00"
    }
    if (startObject.index > endObject.index) {
        // console.log(3);
        return ""
    }
    let sumTotal = 0
    for(let i = startObject.index; i<endObject.index; i++) {
        sumTotal+=timeRates[i].rate;
    }
    // console.log(4);
    return(`$${sumTotal}.00`);

}
export default calculator
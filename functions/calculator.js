const calculator = (startObject, endObject) => {
    console.log("calulcator running");
    const timeRates = [
        {label: "5:00 p.m.", index: 0, value: 17, rate: 12},
        {label: "6:00 p.m.", index: 1, value: 18, rate: 12},
        {label: "7:00 p.m.", index: 2, value: 19, rate: 12},
        {label: "8:00 p.m.", index: 3, value: 20, rate: 12},
        {label: "9:00 p.m.", index: 4, value: 21, rate: 8},
        {label: "10:00 p.m.", index: 5, value: 22,  rate: 8},
        {label: "11:00 p.m.", index: 6, value: 23, rate: 8},
        {label: "12:00 a.m.", index: 7, value: 0, rate: 16},
        {label: "1:00 a.m.", index: 8, value: 1, rate: 16},
        {label: "2:00 a.m.", index: 9, value: 2, rate: 16},
        {label: "3:00 a.m.", index: 10, value: 3, rate: 16},
        {label: "4:00 a.m.", index: 11, value: 4, rate: 0}
    ]

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
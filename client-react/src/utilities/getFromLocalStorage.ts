export function getFromLocalStorage(item: string, prop: string) {
    let data = localStorage.getItem("cooking");
    if (data === null || data === 'null') {
        return null;
    }
    data = JSON.parse(data);
    if (data !== null && Object.keys(data).length === 0) {
        return null;
    }
    if (data !== null && item !== null && prop !== null) {
        if(data.hasOwnProperty(item) && data[item].hasOwnProperty(prop)){
            return data[item][prop];
        }
    }
    return null;
}
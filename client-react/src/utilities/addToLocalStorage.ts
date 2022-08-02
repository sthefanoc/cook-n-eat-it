export function addToLocalStorage (item:string, prop:string, value:string){
    let data = localStorage.getItem("cooking");

    if (data === null || data === 'null') {
        localStorage.setItem("cooking", JSON.stringify({}));
    }
    
    if (data !== null) {
        data = JSON.parse(data)
        if (data !== null && Object.keys(data).length === 0) {
            data[item] = {}
            data[item][prop] = value
            }
        else {
            let propToAdd = {}
            if (prop !== null) {
                propToAdd[prop] = value
            }
            if (data !== null) {
                data[item] = {...data[item], ...propToAdd}
            }
        }
        localStorage.setItem("cooking", JSON.stringify(data))
    }
    return localStorage.getItem("cooking")
}
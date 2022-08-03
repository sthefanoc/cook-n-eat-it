import { getFromLocalStorage } from "./getFromLocalStorage";

export function formatData(data: any) {
    if (data === null || data === 'null') {
        return {};
    }
    const finalData: any = data.map((item: any) => {
        return {
            ...item, ...{
                ingredients_list: item.ingredients.split(',').map((ingredient: string) => ingredient.toLowerCase().trim()).filter((ingredient: string) => ingredient !== ''),
                already_liked: getFromLocalStorage(item.id, "already_liked") || false,
                rating: getFromLocalStorage(item.id, "rating") || 0,
                // likes: (getFromLocalStorage(item.id, "already_liked") || false) ? item.likes+=1 : item.likes,
            }}
        }
    );
    console.log('finalData', finalData);
    return finalData;
}
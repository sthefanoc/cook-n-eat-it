export function formatTime(time: string) {
    const date = new Date(time);    
    return date.toLocaleString('en-us', {dateStyle: 'medium', timeStyle: 'short'});
}
export default function(timestamp) {
    const date = new Date(+timestamp);
    //padStart()方法，如果不足两位，第一位填充0
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0")
    return `${date.getFullYear()}-${month}-${day}`
}
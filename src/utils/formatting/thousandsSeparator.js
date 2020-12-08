export default function thousandsSeparator(num) {
    if(typeof(num) != 'string'){
        num = num.toString();
    }
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
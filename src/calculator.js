export function add(string) {
    if (string.indexOf(',') == -1) return string == '' ? 0 : string;
    let separator = /,|\n/;
    let stringSplit = string.split(separator);
    let result = stringSplit.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    });

    return result;
}

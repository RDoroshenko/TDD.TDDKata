export function add(string) {
    if (string.indexOf(',') == - 1) return string == '' ? 0 : parseInt(string);

    let separator = /,|\n/;
    let stringParsed = string.split(separator);
    let result = stringParsed.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    });

    return result;
}
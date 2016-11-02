export function add(string) {
    switch (string) {
        case '' : return 0; break;
        case 1 : return 1; break;
        default :
            let parameters = string.split(',');
            let sum = 0;
            for (let i = 0; i < parameters.length; i++){
                sum += parseInt(parameters[i]);
            }
                return sum;
            break;
    }


}
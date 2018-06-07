function BalancedBracket() {
    return {
        CreateBrackets: function (input) {
            let count = 0;

            for (let i = 0; i < input.length; i++) {

                if (input[i] == '[') {
                    count++;
                }
                if (input[i] == ']') {
                    count--;
                }
                if (count < 0) {
                    return 'FAIL';
                }
            }
            if (count == 0) {
                return 'OK';
            }
            return 'FAIL';
        }
    }
}
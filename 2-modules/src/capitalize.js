/*
    // Option 1:
    export default function (text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1, text.length);
    }
*/

/*
    // Option 2:
    function capitalize(text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1, text.length);
    }
    export default capitalize;
*/

/*
    // Option 3: multiple functions
    function capitalize(text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1, text.length);
    }
    export default {
        capitalize,
        function2,
        function3,
        functionn,
    };
*/

function capitalize(text) {
    return text.substring(0, 1).toUpperCase() + text.substring(1, text.length);
}
export default capitalize;
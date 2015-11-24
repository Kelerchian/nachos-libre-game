// JavaScript source code
var jerrType = {
    LOG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4
}
/** JERR
 * function untuk passing error
 * 
 */
function jerr(message, ErrorType) {
    if (message == null)
        message = "null";
    switch (ErrorType) {
        case jerrType.LOG:
            console.log(message);
            break;
        case jerrType.INFO:
            console.info(message);
            break;
        case jerrType.ERROR:
            console.error(message);
            break;
        case jerrType.WARN:
        default:
            console.warn(message);
            break;
    }
}
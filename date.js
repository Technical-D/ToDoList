
exports.getDate = function() {
const today = new Date();
    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
     return today.toLocaleDateString("en-us", option);
}
exports.getDay =  function() {
    const today = new Date();
        const option = {
            weekday: "long",
        }
     
     return today.toLocaleDateString("en-us", option);
    }
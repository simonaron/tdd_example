module.exports = function() {
    this.sum = function() {
        result = 0;
        for(i = 0; i< arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }
}
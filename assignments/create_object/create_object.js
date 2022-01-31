function CreateObject(arr) {
    // Write your code here
    var pairs = {};
    var index = 0;
    while (index < arr.length){
        var key = arr[index];
        var value = arr[index+1];
        pairs[key] = value;
        index += 2;
    }
    return pairs
}

module.exports = CreateObject;

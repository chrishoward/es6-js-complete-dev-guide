function reject(array, iteratorFunction) {
        var array2 = array.filter(function (element) {
                return !iteratorFunction(element);
        });
        return array2;
}
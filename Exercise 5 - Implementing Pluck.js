function pluck(array, property) {
        return array.map(function (object) {
                return object[property];
        });
}
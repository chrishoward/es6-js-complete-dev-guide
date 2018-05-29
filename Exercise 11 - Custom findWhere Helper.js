function findWhere(array, criteria) {
        return array.find(function (object) {
                return criteria[Object.keys(criteria)[0]] === object[Object.keys(criteria)[0]];
        });
}
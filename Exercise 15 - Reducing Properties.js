var desks = [
        { type: 'sitting' },
        { type: 'standing' },
        { type: 'sitting' },
        { type: 'sitting' },
        { type: 'standing' }
];

var deskTypes = desks.reduce(function (accumulator, current) {
        if (current.type === 'sitting') { ++accumulator.sitting };
        if (current.type === 'standing') { ++accumulator.standing };
        return accumulator;
}, { sitting: 0, standing: 0 });
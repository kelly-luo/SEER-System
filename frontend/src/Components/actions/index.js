const addLeft = (value) => {
    console.log(value);
    return{
        type: 'ADD_LEFT_DROPDOWN',
        payload: value
    };
};

const addMiddle = (value) => {
    console.log(value);
    return{
        type: 'ADD_MIDDLE_DROPDOWN',
        payload: value
    };
};

const addRight = (value) => {
    console.log(value);
    return{
        type: 'ADD_RIGHT_DROPDOWN',
        payload: value
    };
};

export { addLeft, addMiddle, addRight };
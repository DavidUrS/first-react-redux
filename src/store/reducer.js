const initialState = {
    age:22, 
    history: []
}

const reducer = (state = initialState, action)=>{
    const newState = {...state};
    switch (action.type) {
        case 'AGE_UP':
        //newState.age += action.val
            return{
                ...state,
                age: state.age + action.val,
                history: state.history.concat({age: state.age + action.val})
            }
            break;
    
        case 'AGE_DOWN':
        //newState.age -= action.val
            return{
                ...state,
                age: state.age - action.val,
                history: state.history.concat({age: state.age - action.val})
            }
            break;

        default:
            break;
    }

    return newState;
}

export default reducer;
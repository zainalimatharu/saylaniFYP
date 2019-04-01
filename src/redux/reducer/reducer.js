var initialState = {
    users: {},
}

function myReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGEVALUE" :
        {
            
            return {
                ...state,
                users: action.user,
            }
        }
        default :
        {
            return state;
        }
    }
}

export default myReducer;
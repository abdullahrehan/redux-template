const incrementDecrement=(state=10,action)=>{

    switch(action.type){
        case "increment": return state=state+1;
        case "decrement": return state=state-1;
        default : return state;
        
    }
}

export default incrementDecrement;
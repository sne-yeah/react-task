export const reducer =
(state , action )=> {
    
    if(action.type === "REMOVE_ITEM"){
        return {
            ...state ,
            cart : state.cart.filter((cur)=>{
    return cur.id !== action.payload
            })
        }
    }

if(action.type === "CLEAR_CART"){
    return {...state, cart: []}
}

if(action.type === 'INCREMENT' ){
    let update =state.cart.map((cur)=>{
        if(cur.id=== action.payload){
            return {
                ...cur, amt:cur.amt +1
            }
            
        }
        return cur 
    }) 

    return {...state, cart:update}
}



if(action.type === 'DECREMENT' ){
    let reduce =state.cart.map((cur)=>{
        if(cur.id=== action.payload){
            return {
                ...cur, amt:cur.amt -1
            }
            
        }
        return cur 
    }) 

    return {...state, cart:reduce}
}

    return state
}
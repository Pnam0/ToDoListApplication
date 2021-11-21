import {getStore, updateStore} from "./store"

function reducer (action){

    const store = getStore();

    switch(action.type){

        case "delete":
            const indexD = action.payload.itemIndex;
            const newStore = [...store.slice(0, indexD), ...store.slice(indexD+1)]
            updateStore(newStore);
            action.cb()
            break;
        case "cancel":
            action.cb()
            break;
        case "edit":
            const indexE = action.itemIndex;
            const editedStore = [...store.splice(indexE, 1, action.payload)]
            updateStore(store)
            action.cb()
            break;
        case "add": 
            const addToStore = [...store, (action.payload)]
            updateStore(addToStore)
            action.cb()
            break;

        default: return store
    }

}


export default reducer 
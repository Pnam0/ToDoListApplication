let store = null

function createStore (data=[]){
     if(store === null){
         store = [...data]
     }
     return null
}

function getStore (){
    return store
}

function updateStore(newStore){
    store = [...newStore]
}

export {createStore, getStore, updateStore}


import { Router } from "./routes/router"
import { createStore } from "./redux/store"
import {dataFetcher} from "./utils/datafetcher"
import keyGenerator from './utils/key'



const onAppInit = async function(e){

    const app = document.querySelector('#app')

    let todoitems = await dataFetcher('./data/todos.json')
    
    if(todoitems[0].id === undefined){
        todoitems = [...keyGenerator(todoitems)]
   }

    createStore(todoitems)
    
    Router(window.location.pathname) 

}

window.addEventListener('load', onAppInit)


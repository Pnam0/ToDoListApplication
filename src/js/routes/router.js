import homepage from "../pages/homepage";
import todopage from "../pages/todopage";
import pageNotFound from "../pages/pagenotfound";

// const routes = {
//     "/": homepage,
//     "/todopage":todopage   
// }

const Router =  function (pathname)   {

    const routes = {
        "/": homepage,
        "/todopage":todopage   
    }
    
    const isValidRoute = Object.keys(routes).find(key=>key===pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if(isValidRoute === undefined)
    {
        app.appendChild(pageNotFound())
    }
    else{
         app.appendChild(routes[isValidRoute]())
    }

}

 
export { Router }
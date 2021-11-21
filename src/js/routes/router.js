import homepage from "../pages/homepage";
import todopage from "../pages/todopage";
import deletePage from "../pages/delete";
import addPage from "../pages/add";
import editPage from "../pages/edit";
import pageNotFound from "../pages/pagenotfound";

const routes = {
    "/": homepage,
    "/todopage": todopage,
    "/delete": deletePage,
    "/edit": editPage,
    "/add" :addPage
}


const Router =  function (pathname, params=null)   {

    // const routes = {
    //     "/": homepage,
    //     "/todopage":todopage,
    //     "/delete":deletePage
    // }
    
    const isValidRoute = Object.keys(routes).find(key => key===pathname)

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
         app.appendChild(routes[isValidRoute](params))
    }

}

export { Router }
import logo from './../icons/logo';
import tagline from '../components/tagline/tagline';
import makeElement from '../utils/makeElement';
import link from './../components/ui/link';
import todoitem from '../components/ui/todoitem';
import todotemplate from '../components/ui/todolist';
import { getStore } from '../redux/store';
import bottombar from '../components/ui/appbar';


const todopage = function(params) {

    const todolist = getStore()

    const pageHeader = document.createElement('header')
        pageHeader.classList.add('app-header')
            pageHeader.appendChild(makeElement(logo()))
            pageHeader.appendChild(makeElement(tagline("~ Where your To Do's come True ~")))
            const linkElm = link('Go Home', '/')        
            pageHeader.append(linkElm)
            const container = todotemplate()
            console.log(todolist)
            
            if(todolist !== null) {
                    const ul = container.querySelector('ul')
                    const elements = todolist.map(todo => todoitem(todo))

                    console.log(elements)

                    elements.forEach(element => ul.append(element))
                    
                    pageHeader.append(container)
            }
            pageHeader.appendChild(makeElement(bottombar))



    
    return pageHeader
    
}

export default todopage
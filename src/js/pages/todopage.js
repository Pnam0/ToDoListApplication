import logo from './../icons/logo';
import tagline from '../components/tagline/tagline';
import makeElement from '../utils/makeElement';
import link from './../components/ui/link';
import todoitem from '../components/ui/todoitem';
import todotemplate from '../components/ui/todolist';
import { getStore } from '../redux/store';
import button from '~/src/js/components/button'
import bottombar from '../components/ui/appbar';
import { Router } from '../routes/router';

const todopage = function(params) {

    const todolist = getStore()
    const pageHeader = document.createElement('header')

    //EVENT HANDLER FOR DELETE
    function onDeleteToDo(e) {
        const toDoId = e.currentTarget.dataset.key;
        Router('/delete', toDoId)
    }

    function onEditToDo(e) {
        const toDoId = e.currentTarget.dataset.key;
        const toDoListObject = todolist.find(tdl => tdl.id === toDoId)
        Router('/edit', toDoListObject)
    }

    function onAddToDo(e) {
        Router('/add')
    }

        pageHeader.classList.add('app-header')
            pageHeader.appendChild(makeElement(logo()))
            pageHeader.appendChild(makeElement(tagline("A Simple To Do Application.")))
            const linkElm = link('Go Home', '/')        
            pageHeader.append(linkElm)
            const container = todotemplate()
            
            if(todolist !== null) {
                    const ul = container.querySelector('ul')
                    const elements = todolist.map(todo => todoitem(todo))

                    elements.forEach(element => {
                        element.querySelector('#delete').addEventListener('click', onDeleteToDo)
                        element.querySelector('#edit').addEventListener('click', onEditToDo)
                        ul.append(element)
                    })
                    
                    pageHeader.append(container)
            }
            // pageHeader.appendChild(makeElement(bottombar))
            const footer = document.createElement('footer')
            footer.classList.add('footer-container')
            const addButton = button("+", "add")
            pageHeader.appendChild(footer)
            footer.appendChild(addButton)
            addButton.addEventListener('click', onAddToDo)




    
    return pageHeader
    
}

export default todopage
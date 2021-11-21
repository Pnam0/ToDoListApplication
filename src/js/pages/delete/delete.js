import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/button"
import { Router } from "../../routes/router"
import reducer from "~/src/js/redux/reducer"
import { getStore } from "../../redux/store"

const deletePage = function(props){
    
    const page = document.createElement('div')
    const cancelButton = button('Cancel', "cancel")
    const deleteButton = button('Delete', "delete")
    
    function onDeleteItem(e) {
        
        const itemIndex = getStore().findIndex((toDoItemId) => {

            return (toDoItemId.id === props);

        });
        const action = {
            type: "delete",
            payload:{itemIndex},
            cb:()=>Router('/todopage')
        }
        reducer(action)
    }
    
    function onCancelClick(e) {
        const action = {
            type: "cancel",
            payload:{},
            cb:()=>Router('/todopage')
        }
        reducer(action)
    }

    deleteButton.addEventListener('click', onDeleteItem)
    cancelButton.addEventListener('click', onCancelClick)

    let headerTemplate = `
    <header data-key="${props}" class="main-delete-style center-in-page">
    <h1>Delete Item?</h1>
    <div class="button-container"></div>
    </header>`
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)
    return page
}

export default deletePage

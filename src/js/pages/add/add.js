import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/button"
import { Router } from "../../routes/router"
import reducer from "~/src/js/redux/reducer"
import { v4 as uuidv4} from 'uuid'
import { isEmpty } from "lodash"


const addPage = function(props){
    const newId = uuidv4().substr(0,8);

    
    const page = document.createElement('div')
    const cancelButton = button('Cancel', 'addPageCancel')
    const addButton = button('Add','addPageAdd')
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10 ) {
        dd = '0' + dd;
    }
    if(mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;

    function onAddItem(e) {
        
        let toDoTitle = document.getElementById("toDoTitle").value;
        let toDoCategory = document.getElementById("toDoCategory").value;
        let toDoEndDate = document.getElementById("toDoEndDate").value;
        let toDoEndTime = document.getElementById("toDoEndTime").value;
        let toDoStartDate = document.getElementById("toDoStartDate").value;
        let toDoStartTime = document.getElementById("toDoStartTime").value;
        let id = document.getElementById("toDoId").value;

        if (id === "") {
            id = newId;
        }

        const action = {
            type: "add",
            payload: { 
                id:id,
                category:toDoCategory,
                title:toDoTitle,
                isComplete:false,
                startDate:toDoStartDate,
                startTime:toDoStartTime,
                endDate:toDoEndDate,
                endTime:toDoEndTime},
            cb: () => Router('/todopage')
            
        }
        reducer(action)

    }

    function onCancelItem(e) {
        const action = {
            type: "cancel",
            payload:{},
            cb:()=>Router('/todopage')
        }
        reducer(action)
    }


    addButton.addEventListener('click', onAddItem)
    cancelButton.addEventListener('click', onCancelItem)
    let headerTemplate = `
    <header data-key="${props}" class="welcome center-in-page">
    <h1>Add To Do Item.</h1>
    <div class="edit-container">
        <label class="item-label" for="toDoId"> To Do Id (Can Auto-Generate) </label><br>
        <input class="form-control" type="text" id="toDoId" name="toDoId" required/><br>

        <label class="item-label" for="toDoTitle"> To Do Title </label><br>
        <input class="form-control" type="text" id="toDoTitle" name="toDoTitle" required/><br>

        <label class="item-label" for="toDoEndDate"> End Date </label><br>
        <input class="form-control" type="date" id="toDoEndDate" name="toDoEndDate" min="${today}" required/><br>

        <label class="item-label" for="toDoEndTime"> End Time </label><br>
        <input class="form-control" type="time" id="toDoEndTime" name="toDoEndTime" required/><br>

        <label class="item-label" for="toDoStartDate"> Start Date </label><br>
        <input class="form-control" type="date" id="toDoStartDate" name="toDoStartDate" min="${today}" required/><br>

        <label class="item-label" for="toDoStartTime"> Start Time </label><br>
        <input class="form-control" type="time" id="toDoStartTime" name="toDoStartTime" required/><br>

        <label class="item-label" for="toDoCategory">Category</label><br>
        <select class="form-control" id="toDoCategory" name="toDoCategory"><br>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
            <option value="Friends">Friends</option>
            <option value="Health">Health</option>
        </select><br>
    </div>
    </header>`
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton, addButton)
    page.append(pageHeader)
    return page
}

export default addPage
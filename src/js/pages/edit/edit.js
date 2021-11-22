import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/button"
import { Router } from "../../routes/router"
import reducer from "~/src/js/redux/reducer"
import { getStore } from "../../redux/store"


const editPage = function(props){

    const page = document.createElement('div')
    const cancelButton = button('Cancel', 'addPageCancel')
    const editButton = button('Edit','addPageAdd')
    
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

    var currentDate = dd + "/" + mm + "/" + yyyy;

    var time = today.getHours() + ":" + today.getMinutes()


    function onEditItem(e) {
        const itemIndex = getStore().findIndex((toDoItemId) => {

            return (toDoItemId.id === props);

        });

        let toDoTitle = document.getElementById("toDoTitle").value;
        let toDoCategory = document.getElementById("toDoCategory").value;
        let toDoEndDate = document.getElementById("toDoEndDate").value;
        let toDoEndTime = document.getElementById("toDoEndTime").value;
        let toDoStartDate = document.getElementById("toDoStartDate").value;
        let toDoStartTime = document.getElementById("toDoStartTime").value;
        let toDoComplete = document.getElementById("toDoComplete").value;
        let id = props.id;
    

        if(toDoComplete === "Complete") {
            const stringliteral = `<divid ="strings">string literal</div>`

        }
        else {
                toDoComplete = false
        }
        
            const action = {
                type: "edit",
                payload: { 
                    id:id,
                    category:toDoCategory,
                    title:toDoTitle,
                    isComplete:toDoComplete,
                    startDate:toDoStartDate,
                    startTime:toDoStartTime,
                    endDate:toDoEndDate,
                    endTime:toDoEndTime},
                    index: itemIndex, 
                cb: () => Router('/todopage')
                
        }

            reducer(action)
    }

        let toDoItemId = props.id
         let toDoItemTitle = props.title
         let toDoItemCategory = props.category
         let toDoItemEndDate = props.endDate
         let toDoItemEndTime = props.endTime
         let toDoItemStartDate = props.startDate
         let toDoItemStartTime = props.startTime
        let toDoItemComplete = props.isComplete

        let completionSelection
        let categorySelection

        //I couldn't quite figure out how to do it in another way. 
        //I think I would need to bind a string literal first and then pass it to makeElement
        //and then do a querySelector().value = value

        if(toDoItemComplete === true)
        {
            completionSelection =
            `<option id="Complete" value="Complete" selected>Complete</option>
            <option id="Incomplete" value="Incomplete">Incomplete</option>`
        }
        else {
            completionSelection =
            `<option id="Complete" value="Complete">Complete</option>
            <option id="Incomplete" value="Incomplete" selected>Incomplete</option>`
        }

        if (toDoItemCategory === "Home" ) {
            categorySelection =
            `<option value="Home" selected>Home</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
            <option value="Friends">Friends</option>
            <option value="Health">Health</option>`
        }
        if (toDoItemCategory === "Work") {
            categorySelection =
            `<option value="Home">Home</option>
            <option value="Work" selected>Work</option>
            <option value="School">School</option>
            <option value="Friends">Friends</option>
            <option value="Health">Health</option>`
        }
        if (toDoItemCategory === "School") {
            categorySelection =
            `<option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="School" selected>School</option>
            <option value="Friends">Friends</option>
            <option value="Health">Health</option>`
        }
        if (toDoItemCategory === "Friends") {
            categorySelection =
            `option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
            <option value="Friends" selected>Friends</option>
            <option value="Health">Health</option>`
        }
        if (toDoItemCategory === "Health") {
            categorySelection =
            `<option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
            <option value="Friends">Friends</option>
            <option value="Health" selected>Health</option>`
        }



    function onCancelItem(e) {
        const action = {
            type: "cancel",
            payload:{},
            cb:()=>Router('/todopage')
        }
        reducer(action)
    }


    cancelButton.addEventListener('click', onCancelItem)
    editButton.addEventListener('click', onEditItem)
    let headerTemplate = `
    <header data-key="${props}" class="welcome center-in-page">
    <h1>Edit To Do Item.</h1>
    <div class="edit-container">
        <label class="item-label" for="toDoId"> To Do ID </label><br>
        <input class="form-control" type="text" id="toDoId" value="${toDoItemId}" name="toDoTitle" readonly/><br>

        <label class="item-label" for="toDoTitle"> To Do Title </label><br>
        <input class="form-control" type="text" id="toDoTitle" value="${toDoItemTitle}" name="toDoTitle"/><br>

        <label class="item-label" for="toDoEndDate"> End Date </label><br>
        <input class="form-control" type="date" id="toDoEndDate" name="toDoEndDate" value="${toDoItemEndDate}" min="${currentDate}"/><br>

        <label class="item-label" for="toDoEndTime"> End Time </label><br>
        <input class="form-control" type="time" id="toDoEndTime" value="${toDoItemEndTime}" name="toDoEndTime"/><br>

        <label class="item-label" for="toDoStartDate"> Start Date </label><br>
        <input class="form-control" type="date" id="toDoStartDate" name="toDoStartDate" value="${toDoItemStartDate}" min="${currentDate}"/><br>
        
        <label class="item-label" for="toDoStartTime"> Start Time </label><br>
        <input class="form-control" type="time" id="toDoStartTime" value="${toDoItemStartTime}" name="toDoStartTime"/><br>

        <label class="item-label" for="toDoComplete">Complete Status</label><br>
        <select class="form-control" id="toDoComplete" name="toDoComplete"><br>
            ${completionSelection}
        </select><br>

        <label class="item-label" for="toDoCategory">Category</label><br>
        <select class="form-control" id="toDoCategory" name="toDoCategory"><br>
            ${categorySelection}
        </select><br>
    </div>
    </header>`
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton, editButton)
    page.append(pageHeader)
    return page
}

export default editPage
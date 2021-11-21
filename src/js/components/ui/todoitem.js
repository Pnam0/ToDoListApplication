import makeElement from "../../utils/makeElement";

const todoitem = function ({id,category,title,isComplete,startDate,startTime,endDate,endTime}) {
  const template =` 
    <li class="todo ${category}"  data-key="${id}">
      <p>${category}</p>
      <p> ${title} </p>
      <p>Start Date: ${startDate +" | " + startTime}</p> 
      <p>End Date: ${(isComplete == false) ? "Incomplete" : endDate + " | "+ endTime}</p> 
      <p>${(isComplete == false) ? "" : "Completed"}</p>
      <p class="controls">
      <button class="edit" id="edit" data-key="${id}"><span><i class="far fa-edit"> Edit</i></span></button>
      <button class="delete" id="delete" data-key="${id}"><span><i class="far fa-trash-alt"> Delete</span></i></button>
      </p> 
    </li> 
  `;
  return makeElement(template)
};

export default todoitem


import makeElement from "../../utils/makeElement";

const todoitem = function ({id,category,title,isComplete,startDate,startTime,endDate,endTime}) {
  const template =` 
    <li class="todo ${category}"  data-key="${id}">
      <p>${category}</p>
      <p> ${title} </p>
      <p>Start Date: ${startDate +" | " + startTime}</p> 
      <p>End Date: ${(isComplete == false) ? "Incomplete" : endDate + " | "+ endTime}</p> 
      <p>${(isComplete == false) ? "" : "Completed"}</p>
      <p class="controls"><button>&#9998 Edit</button><button>&#128465 Delete</button></p> 
    </li> 
  `;
  return makeElement(template)
};

export default todoitem


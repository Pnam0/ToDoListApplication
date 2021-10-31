import makeElement from "../../utils/makeElement";

const todolist = function() {
    const template = `
    <aside id="todolist" class="todolist">
    <header>
        <h2>To Do List</h2>
    </header>
    <ul id="todos" class="todos">
     
    </ul>
    </aside>
    `
    return makeElement(template)
};

export default todolist


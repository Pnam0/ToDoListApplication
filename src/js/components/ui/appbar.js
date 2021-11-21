import makeElement from "../../utils/makeElement";

const bottombar = function() {
    const template = `
    <footer class="bottombar"><button id="add" class="addcontrol">+</button></footer>
    `
    return makeElement(template)
};

export default bottombar
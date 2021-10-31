import makeElement from "../../utils/makeElement"

const levelHeading = function (elementType='h2', label="ui heading", className="ui-heading"){
const template = `<${elementType} class="${className}"> ${label} </ ${elementType}>`
const element = makeElement(template)

return element
};

export default levelHeading
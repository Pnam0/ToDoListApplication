const makeElement = function(templateString=``) {
    const docFrag = document.createRange().createContextualFragment(templateString)
    const element = docFrag.children[0]
    return element

}

export default makeElement
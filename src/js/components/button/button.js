import makeElement from "~/src/js/utils/makeElement"
import styles from './styles.module.scss';

const button = function (label = "ui button", id="add") {
    const template = `<button id=${id} class="${styles.buttonBase}">${label}</button>`
    const element = makeElement(template);

    return element


}

export default button
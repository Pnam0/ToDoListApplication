import logo from './../icons/logo';
import header from '../components/header/header';
import tagline from '../components/tagline/tagline';
import makeElement from '../utils/makeElement';
import link from './../components/ui/link';


const homepage = function(params) {
    
    const pageHeader = document.createElement('header')

        pageHeader.classList.add('page-header')
        pageHeader.appendChild(makeElement(logo()))
        pageHeader.appendChild(makeElement(header("A <span>Parody</span> Disney&copy To Do App")))
        pageHeader.appendChild(makeElement(tagline("~ Where your To Do's come True ~")))
        const linkElm = link('To Infinity and Beyond... The App!', '/todopage')        
        pageHeader.append(linkElm)

        return pageHeader
}

export default homepage
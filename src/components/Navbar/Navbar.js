
import React from 'react';
import './Navbar.css';
import piePic from '../../assets/piePic.png';
import Logout from '../Logout/Logout';
const Navbar = (props) => {
    console.log(props);
    return(
        <div>
            <nav>
                <img id='piePic' src={piePic} alt='pie'/>
                <Logout clearSession={props.clearSession}/>
            </nav>
        </div>
    )
}
export default Navbar;



// import React from 'react';
// import './Navbar.css';
// import piePic from '../../assets/piePic.png';
// import Logout from '../Logout/Logout';

// const Navbar = (props) => {

//     return(
//         <div>
//             <nav>
//                 <img id="piePic" src={piePic} alt= "pie" />
//                 <Logout clearSession={props.clearSession}/>
//             </nav>
//         </div>
//     )
// }

// export default Navbar;
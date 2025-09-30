import React from "react"
import cx from 'classnames'
import {NavLink, Link} from 'react-router-dom'

import Panel from './Panel'

const Navbar = () => {
    const activeClass = 'text-blue-500 font-bold decoration-solid'
    const pendingClass = 'text-red-500'
    
    return(
        <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
            <Link to ='/' className="text-blue-500"> Buttons </Link>
            <Link to ='/accordian' className="text-blue-500"> Accordian </Link>
            <Link to ='/dropdown' className="text-blue-500"> Dropdown </Link>
        </Panel>

        // <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
        //     <NavLink 
        //         to='/' 
        //         className={cx(
        //             ({isActive, isPending}) =>
        //             isPending ? 'pending' : isActive ? 'active': ''
        //         )}
        //     >
        //         Buttons
        //     </NavLink>
        //     <NavLink to='/accordian' className={classes}>
        //         Accordian
        //     </NavLink>
        //     <NavLink to='/dropdown' className={classes}>
        //         Dropdown
        //     </NavLink>
        // </Panel>
    )
}

export default Navbar
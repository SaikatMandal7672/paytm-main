/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const BottomWarning = ({ label, to, linktext }) => {
    return (
        <div>
            <div className='py-2 text-sm flex justify-center'>
                {label}
            </div>
            <Link className="pointer underline pl-1 cursor-pointer" to={to} >
                {linktext}
            </Link>
        </div>
    )
}

export default BottomWarning
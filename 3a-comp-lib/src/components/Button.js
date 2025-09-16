import cx from 'classnames'
//import PropTypes from 'prop-types'

const Button = (props) => {
    const {children, primary, secondary, danger, warning, success, rounded, outline} = props

    const baseClass = 'flex items-center px-8 py-3 border'
    return <button className={cx(baseClass, {
        // color variants
        'bg-blue-500 border-blue-500 text-white' : primary,
        'bg-gray-900 border-gray-900 text-white' : secondary,
        'bg-green-500 border-green-500 text-white' : success,
        'bg-orange-400 border-orange-500 text-white' : warning,
        'bg-red-600 border-red-600, text-white' : danger,
        // outline and rounded additional style props
        'round-full' : rounded,
        'bg-white' : outline,
        'text-blue-500' : outline && primary,
        'text-gray-900' : outline && secondary,
        'text-green-500' : outline && success,
        'text-orange-400' : outline && warning,
        'text-red-600' : outline && danger,
    })}>{children}</button>
}

Button.propTypes = {
    // validating props by type, most common reason for using this library
    // typescript is used now for this
    // primary: PropTypes.bool,
    checkVariationValue: ({primary,secondary,success,warning,danger}) => {
        const count = 
        Number(!!primary)
        +Number(!!secondary)
        +Number(!!success)
        +Number(!!warning)
        +Number(!!danger)

        if (count > 1){
            return new Error('You silly goose! Only one of primary,secondary,success,warning,danger can be TRUE')
        }
    }
}

export default Button
import {useState} from "react"
import cx from 'classnames'

const Dropdown = (props) => {
    const {options} = props
    // local state
    const [isOpen, setIsOpen] = useState(true)
    const renderedOptions = options.map((opt, index) => {
        return ( 
            <div key={index} className="hover:bg-sky-100 rounded cursor-pointer p-1">
                {opt.label}
            </div>
        )
    })

    return (
        <div className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer'> 
                {/* conditonal text coming soon */}
                Select...
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>} 
        </div>
    )
}

const Panel = (props) => {
    const {className, children, ...rest} = props
    const finalClassNames = cx(
        className, 
        'border rounded padding p-3 shadow bg-white w-full'
    )

    return (
        <div {...rest} className={finalClassNames}>
            {children}
        </div>
    )
}

export {Panel}
export default Dropdown
import React from 'react'
import './InputIcon.css'

const InputIcon = ({handleChange, handleEnter, label, InputIcon, ...otherProps}) => {

    return (
       <div className="group shadow">
           <div className='icon'>
                {
                    InputIcon ? <InputIcon /> : null
                }
           </div>
           <input className='form-input' onChange={handleChange} onKeyPress={handleEnter} {...otherProps} />
           {
               label ? (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}>
                            {label}
                        </label>) : null
           }
       </div>
    )
}

export default InputIcon;
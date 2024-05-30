import React from 'react'

const GenderCheckbox = () => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className="cursor-pointer label gap-2">
                    <span className="label-text">Male</span>
                    <input name='male' type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
                </label>
            </div>
            <div className='form-control'>
                <label aria-label="male"className="cursor-pointer label gap-2">
                    <span className="label-text">Female</span>
                    <input name='female' type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox

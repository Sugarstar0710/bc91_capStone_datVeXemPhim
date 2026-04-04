import React from 'react'
import { useSelector } from 'react-redux'

const ModalEditGioHang = () => {
     const {title, contentComponent}= useSelector(rootState=> rootState.DrawerContainerReducer)
    return (
        <div>
            {/* <button className="btn btn-primary" type="button" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className=' border-1 border-bottom w-100 border-2'></div>
                <div className="offcanvas-body">
                    {contentComponent}
                </div>
            </div>
            
        </div>

    )
}

export default ModalEditGioHang
import React from 'react'
import SanPham from './SanPham'

const SanPhamNoiBat = () => {
    return (
        <div className='mt-4' >
            <h1 className='text-light text-center pt-5' style={{ background: 'rgb(29,69,141)', padding: '40px' }} >Sản Phẩm Được Yêu Thích</h1>
            <div className="row g-0 ms-5">
                <SanPham/>
            </div>
        </div>
    )
}

export default SanPhamNoiBat
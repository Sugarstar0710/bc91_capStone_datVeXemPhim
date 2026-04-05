import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { themGioHang } from '../redux/reducer/BTGioHangReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setArrayProduct, sortPriceAsc, sortPriceDesc } from '../redux/reducer/ProductPageReducer'
import { useState } from 'react'
const Search = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const { mangSanPham } = useSelector(rootState => rootState.ProductPageReducer)
    const k = searchParams.get('k')
    const getProductByKeyword = async () => {
        let keyword = searchParams.get('k')
        if (keyword) {
            try {
                const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`)
                const action = setArrayProduct(res.data.content)
                dispatch(action)
            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        getProductByKeyword()
    }, [k]);
    const handleSubmit = (e) => {
        e.preventDefault()
        getProductByKeyword()
    }
    return (
        <div className="container py-5">
            <form className="mb-4" onSubmit={handleSubmit}>
                <label className="form-label text-secondary small ms-1">Search</label>
                <div className="d-flex gap-3 align-items-center">
                    <input type="text" className="form-control border-0 bg-secondary-subtle py-2 w-25" placeholder="product name ...."
                        onInput={(e) => {
                            const value = e.target.value
                            setSearchParams({ k: value })
                        }} />
                    <button className="btn rounded-pill px-4 fw-bold text-white shadow-sm" style={{ backgroundColor: '#6610f2' }}>
                        SEARCH
                    </button>
                </div>
            </form>
            <div className="text-white p-3 fs-3 fw-normal mb-4" style={{ background: 'linear-gradient(to right, #9d00ff, #4e00ff)', width: '100%' }}>
                Search result
            </div>
            <div className="mb-5" style={{ maxWidth: 300 }}>
                <label className="form-label text-secondary small">Price</label>
                <select className="form-select border-0 bg-secondary-subtle mb-2" onChange={(e) => {
                    const value = e.target.value
                    if (value === "asc") {
                        dispatch(sortPriceAsc())
                    }
                    if (value === "desc") {
                        dispatch(sortPriceDesc())
                    }
                }}>
                    <option value="" selected >Select price</option>
                    <option value="asc" >increase</option>
                    <option value="desc" >decrease</option>
                </select>
            </div>
            <div className="row g-4">
                {mangSanPham.map((item, index) => {
                    return <div className="col-md-4" >
                        <div className="card border-0 shadow-sm h-100" key={item.id}>
                            <div className="position-relative overflow-hidden bg-light" style={{ minHeight: 240 }}>
                                <img
                                    src={item.image}
                                    className="w-100 h-100"
                                    style={{ objectFit: 'contain' }}
                                />
                                <span
                                    className='position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center rounded-circle bg-white text-dark border border-2 border-secondary'
                                    style={{ width: 40, height: 40 }}
                                >
                                    <i className="fa-solid fa-heart"></i>
                                </span>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mb-1">{item.name}</h5>
                                <p className="text-muted small mb-4">{item.shortDescription}</p>
                                <div className="d-flex align-items-center justify-content-between mt-auto">
                                    <div className="d-flex gap-2">
                                        <NavLink to={`/detail/${item.id}`} className="btn btn-outline-secondary px-2 py-3" style={{ fontSize: 16 }}>View detail</NavLink>
                                        <button className="btn btn-warning btn-sm px-3 py-3 " style={{ fontSize: 16 }} onClick={(e) => {
                                            const action = themGioHang(item)
                                            dispatch(action)
                                        }}>Buy now</button>
                                    </div>
                                    <span className="badge bg-danger text-white py-3 px-3" style={{ fontSize: 16 }}>{item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>

    )
}

export default Search
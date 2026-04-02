import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailActionThunk } from '../redux/reducer/ProductPageReducer'
import { NavLink, useParams } from 'react-router-dom'
const Detail = () => {
  const params= useParams()
  const {productDetail}= useSelector(rootState=> rootState.ProductPageReducer)
  const dispatch= useDispatch()
  const getProductDetailApi=async()=>{
    dispatch(getProductDetailActionThunk(params.id))
  }
  const [rotate,setRotate]= useState('rotate(0deg)')
  const [size,setSize]= useState('32')
  useEffect(()=>{
    getProductDetailApi()
  },[params.id])
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm">
            <img src={productDetail.image} className="card-img-top" alt="Product detail" style={{ objectFit: 'contain', height: 420, transform:rotate }} />
          </div>
          <div className="row row-cols-4 g-2 mt-3">
            {productDetail.detaildetailedImages?.map((item,index)=>{
              let className=`border-default`
              if(item ==rotate){
                className=`border-primary`
              }
              return (
                <div className="col" key={index}>
                  <button
                    type="button"
                    className={`w-100 h-100 border ${className} rounded-3 p-0 bg-white`}
                    style={{ height: 90 }}
                    onClick={(e) => setRotate(item)}
                  >
                    <img
                      src={productDetail.image}
                      className="w-75 h-75 overflow-hidden"
                      style={{ objectFit: 'cover', transform: item }}
                    />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-lg-7">
          <div className="pb-3 border-bottom mb-4">
            <h1 className="mb-3">{productDetail.name}</h1>
            <p className="text-muted" style={{fontSize:18}}>{productDetail.shortDescription}</p>
          </div>
          <div className="mb-2">
            <h6 className="text-uppercase text-success mb-3">Available size</h6>
            <div className="d-flex flex-wrap gap-2">
              {productDetail.size?.map((item,index)=>{
                let className=`btn-outline-secondary`
                if(item ==size){
                  className=`btn-success`
                }
                return <button key={index} type="button" style={{fontSize:16}} onClick={(e)=>{
                  setSize(item)
                }} className={`btn ${className} me-2 px-3 py-2`}>{item}</button>
              })}
            </div>
          </div>
          <div className="mb-2">
            <div className="my-3">
              <span className="fs-3 fw-bold text-danger">${productDetail.price}</span>
            </div>
            <div className="mb-3">
              <div className="input-group" style={{ width: 140 }}>
                <button className="btn btn-outline-secondary" type="button">-</button>
                <input type="text" className="form-control text-center" defaultValue={1} readOnly />
                <button className="btn btn-outline-secondary" type="button">+</button>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary px-4 my-2">Add to cart</button>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="mb-4">Product Details</h3>
        <div className="card border-1 shadow-sm p-3">
          <div className="card-body">
            <p className="text-muted mb-4">{productDetail.description}</p>
            <div className="row g-2 mb-2">
              <div className="col-12">
                <div className="overflow-hidden d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
                  <img
                    src={productDetail.image}
                    className="w-75 h-50"
                    style={{ objectFit: 'cover' }}
                    alt={productDetail.name}
                  />
                </div>
              </div>
            </div>
            <div>
              <h4 className="fw-semibold mb-2">Lưu ý: </h4>
              <p className="text-danger fs-5 fst-italic mb-3">* Shop chỉ bảo hành cho những sản phẩm lỗi do nhà sản xuất</p>
              <ul className="list-unstyled mb-0" style={{fontSize: 16}}>
                <li className="mb-2">
                  <i className="fa-solid fa-circle-check text-success me-2"></i>
                  Hoàn tiền nếu nhận sản phẩm không giống hình
                </li>
                <li className="mb-2">
                  <i className="fa-solid fa-circle-check text-success me-2"></i>
                  Đổi ngay hàng mới nếu nhận hàng bị lỗi, hỏng từ phía nhà sản xuất
                </li>
                <li className="mb-2">
                  <i className="fa-solid fa-circle-check text-success me-2"></i>
                  Hỗ trợ đổi hàng nếu các bạn đi không vừa
                </li>
                <li>
                  <i className="fa-solid fa-circle-check text-success me-2"></i>
                  Chat với shop để được tư vấn nếu cần nhé
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="mb-4 text-center">- Realate Product -</h3>
        <div className="row g-4">
          {productDetail.relatedProducts?.map((item,index)=>{
            return <div className="col-md-4" key={item.id ?? index}>
              <div className="card border-0 shadow-sm h-100">
                <div className="position-relative overflow-hidden bg-light" style={{ minHeight: 240 }}>
                  <img
                    src={item.image}
                    className="w-100 h-100"
                    style={{ objectFit: 'contain' }}
                    alt={item.name}
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
                  <p className="text-muted small my-3">{item.shortDescription}</p>
                  <span className="fs-4 fw-bold text-danger mb-3">${item.price}</span>
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div className="d-flex gap-2">
                      <NavLink to={`/detail/${item.id}`} className="btn btn-outline-secondary px-2 py-3" style={{ fontSize: 16 }}>View detail</NavLink>
                      <button className="btn btn-warning btn-sm px-3 py-3" style={{ fontSize: 16 }}>Buy now</button>
                    </div>
                    <span className="badge bg-danger text-white py-3 px-3" style={{ fontSize: 16 }}>${item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>

  )
}

export default Detail
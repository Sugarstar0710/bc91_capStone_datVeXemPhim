import React from 'react'

const SanPham = (props) => {
    const { mangSanPham } = props
    return (
        <div className="row g-4">
            {mangSanPham.map((sanPham, index)=>{
                return <div className="col-md-4" key={sanPham.id}>
                <div className="card border-0 shadow-sm h-100" >
                    <div className="position-relative overflow-hidden bg-light" style={{ minHeight: 240 }}>
                        <img
                            src={sanPham.image}
                            className="w-100 h-100"
                            style={{ objectFit: 'contain' }}
                        />
                        <span
                            className={`position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center rounded-circle `}
                            style={{ width: 40, height: 40 }}
                        >
                            {/* ${
                    product.isFavorite ? 'bg-danger text-white' : 'bg-white text-danger border border-2 border-secondary'
                  } */}
                            <i className="fa-solid fa-heart"></i>
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title mb-1">{sanPham.name}</h5>
                        <p className="text-muted small mb-4">{sanPham.shortDescription}</p>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-secondary px-2 py-3" style={{fontSize:16}}>View detail</button>
                                <button className="btn btn-warning btn-sm px-3 py-3 " style={{fontSize:16}}>Buy now</button>
                            </div>
                            <span className="badge bg-danger text-white py-3 px-3" style={{fontSize:16}}>${sanPham.price}</span>
                        </div>
                    </div>
                </div>
            </div>
            })}
            
        </div>


        /* {visibleProducts.length === 0 && (
          <div className="col-12">
            <div className="alert alert-info mb-0">Không có sản phẩm phù hợp với bộ lọc hiện tại.</div>
          </div>
        )} */
    )
}

export default SanPham
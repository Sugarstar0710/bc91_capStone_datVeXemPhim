import React, { useEffect} from 'react'
import SanPham from '../components/Products/SanPham'
import { useDispatch, useSelector } from 'react-redux'
import { getProductApi } from '../redux/reducer/ProductPageReducer'
import Carousel from '../components/Products/Carousel'
const Products = () => {
  const {mangSanPham}= useSelector(rootState=> rootState.ProductPageReducer)
  const dispatch= useDispatch()
  const getAllProductApi= async()=>{
    dispatch(getProductApi())
  }
  useEffect(()=>{
    getAllProductApi()
  },[])
  // const [filter, setFilter] = useState('all')

  // const visibleProducts = useMemo(() => {
  //   if (filter === 'favorite') return PRODUCTS.filter((product) => product.isFavorite)
  //   if (filter === 'non-favorite') return PRODUCTS.filter((product) => !product.isFavorite)
  //   return PRODUCTS
  // }, [filter])

  return (
    <div className="container py-2">
      <Carousel mangSanPham={mangSanPham}/>
      <div
        className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-4 rounded-4 p-4"
        style={{ background: 'linear-gradient(90deg, #8f27ff 0%, #ff3476 100%)' }}
      >
        <div>
          <h2 className="text-white mb-1">Product Feature</h2>
          <p className="text-white-50 mb-0">Các sản phẩm giày thời trang nổi bật.</p>
        </div>

      <SanPham mangSanPham={mangSanPham}/>
      {/* <div className="row g-4">
        <SanPham mangSanPham={mangSanPham}/>
      </div> */}
    </div>
  </div>
  )
}

export default Products

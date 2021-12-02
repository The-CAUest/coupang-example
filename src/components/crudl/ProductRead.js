import { Card, Checkbox } from 'antd'
import 'antd/dist/antd.css'
import Product from '../../classes/crudl/Product'
import React, { useEffect, useState } from 'react'

function ProductRead({ id, title, showList, style={} }) {
  const [data, setData] = useState({})

  useEffect(() => {
    Product.readProduct(id).then(data => setData(data))
  }, [id])

  if (!data) return null

  return(
      <div style={style}>
        <img src={data['img_imageUrl']} width={80} alt='image' />
        <h4>{data['name']}</h4>
        <h4>{data['price']}</h4>
      </div>
   )
}

export default ProductRead

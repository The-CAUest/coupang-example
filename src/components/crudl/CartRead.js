import { Card, Checkbox } from 'antd'
import 'antd/dist/antd.css'
import Cart from '../../classes/crudl/Cart'
import React, { useEffect, useState } from 'react'

function CartRead({ id, title, showList, onClick, style={} }) {
  const [data, setData] = useState({})

  useEffect(() => {
    Cart.readCart(id).then(data => setData(data))
  }, [id])

  if (!data) return null
  
  return(
      <div style={style}>
        <Card title={data[title]} onClick={onClick ? () => onClick(data) : onClick}>
          {showList.map(function (elem) {
            if (typeof (data[elem]) === 'boolean') {
              return <Checkbox style={{marginBottom:15}} defaultChecked={data[elem]} disabled>{elem}</Checkbox>
            } else if (elem.startsWith('img_')) {return}
            return <p>{data[elem]}</p>
          })}
        </Card>
      </div>
   )
}

export default CartRead
  
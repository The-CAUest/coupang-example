import { Checkbox, List } from 'antd'
import 'antd/dist/antd.css'
import Category from '../../classes/crudl/Category'
import React, { useEffect, useState } from 'react'

function CategoryList({ filter, showList, onClick, style={} }) {
  const [data, setData] = useState([])
  
  useEffect(() => {
    Category.listCategory(filter).then(data => {
      setData(data)
    })
  }, [])
  
  if (!data) return null
  
  return (
    <div style={style}>
        <List
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item onClick={onClick ? () => onClick(item) : onClick}>
              {showList.map(function (elem) {
                if (typeof (item[elem]) === 'boolean') {
                  return <Checkbox defaultChecked={item[elem]} disabled>{elem}</Checkbox>
                } else if (elem.startsWith('img_')) { 
                  return <img src={item[elem]} alt='logo' />
                 }
                return <p>{item[elem]}</p>
              })}
            </List.Item>
          )}
        />
     </div>
  )  
}

export default CategoryList
  
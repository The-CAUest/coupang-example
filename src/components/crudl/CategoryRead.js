import { Card, Checkbox } from 'antd'
import 'antd/dist/antd.css'
import Category from '../../classes/crudl/Category'
import React, { useEffect, useState } from 'react'

function CategoryRead({ id, title, showList, style={} }) {
  const [data, setData] = useState({})

  useEffect(() => {
    Category.readCategory(id).then(data => setData(data))
  }, [id])

  if (!data) return null
  
  return(
      <div style={style}>
        <Card title={data[title]}>
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

export default CategoryRead
  
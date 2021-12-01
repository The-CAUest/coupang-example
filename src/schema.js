module.exports = {
  'Cart': [{
    'name': 'id',
    'mandatory': true,
    'isConnection': false,
    'type': 'ID'
  }, { 'name': 'Product', 'mandatory': false, 'isConnection': true, 'type': 'Product' }],
  'Category': [{ 'name': 'id', 'mandatory': true, 'isConnection': false, 'type': 'ID' }, {
    'name': 'name',
    'mandatory': true,
    'isConnection': false,
    'type': 'String'
  }, { 'name': 'Products', 'mandatory': false, 'isConnection': true, 'type': '[Product]' }],
  'Product': [{ 'name': 'id', 'mandatory': true, 'isConnection': false, 'type': 'ID' }, {
    'name': 'name',
    'mandatory': true,
    'isConnection': false,
    'type': 'String'
  }, { 'name': 'description', 'mandatory': false, 'isConnection': false, 'type': 'String' }, {
    'name': 'price',
    'mandatory': true,
    'isConnection': false,
    'type': 'Int'
  }, { 'name': 'categoryID', 'mandatory': false, 'isConnection': false, 'type': 'ID' }, {
    'name': 'img_imageUrl',
    'mandatory': false,
    'isConnection': false,
    'type': 'String'
  },{
    'name': 'img_descImage',
    'mandatory': false,
    'isConnection': false,
    'type': 'String'
  }]
}

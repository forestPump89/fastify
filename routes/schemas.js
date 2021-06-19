const { getItem, getItems, addItem, deleteITem, updateItem } = require('../controllers/items')

// Item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
}

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getItems,
}

// Options for get single item
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
}

// Options for post single item
const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
}

// Options for post single item
const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
      },
    },
  },
  handler: deleteITem,
}

// Options for post single item
const updateItemOps = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
}

module.exports = {
  getItemOpts,
  getItemsOpts,
  updateItemOps,
  deleteItemOpts,
  postItemOpts,
}

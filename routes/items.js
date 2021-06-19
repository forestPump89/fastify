const { getItemsOpts, getItemOpts, updateItemOps, deleteItemOpts, postItemOpts } = require('./schemas')

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get('/items', getItemsOpts)

  // Get single items
  fastify.get('/item/:id', getItemOpts)

  // Add item
  fastify.post('/items', postItemOpts)

  // Delete item
  fastify.delete('/items/:id', deleteItemOpts)

  // Update item
  fastify.put('/items/:id', updateItemOps)

  done()
}

module.exports = itemRoutes

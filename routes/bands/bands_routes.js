module.exports = (controller, params, res, method) => {

  if (params._id) { params._id = parseInt(params._id) }

  const getBand = () => {
    controller.get(params, (err, band) => {
      if (err) return res.sendStatus(400)
      if (band) return res.send(band)
      res.sendStatus(404)
    })
  }

  const createBand = () => {
    controller.create(params, (err, doc) => {
      if (err) return res.sendStatus(400)
      res.sendStatus(200)
    })
  }

  const updateBand = () => {
    controller.update(params, (err, doc) => {
      if (err) return res.sendStatus(400)
      res.sendStatus(200)
    })
  }

  const deleteBand = () => {
    controller.delete(params, (err, doc) => {
      if (err) return res.sendStatus(400)
      res.sendStatus(200)
    })
  }

  switch (method) {
    case 'GET': return getBand()
    case 'POST': return createBand()
    case 'PUT': return updateBand()
    case 'DELETE': return deleteBand()
  }
}

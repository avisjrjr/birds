import { Router } from 'express'
const router = Router()
import * as birdsCtrl from '../controllers/birds.js'


router.get('/birds', birdsCtrl.index)
router.get('/birds/:id', birdsCtrl.show)
router.post('/birds', birdsCtrl.create)
router.put('/birds/:id', birdsCtrl.update)
router.delete('/birds/:id', birdsCtrl.delete)

export {
  router
}

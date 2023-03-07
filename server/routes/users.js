import express from 'express'
import { deleteUser, updateUser, getAllUsers, getSingleUser }
    from './../controllers/userController.js'
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

router.put('/:id', verifyUser, updateUser)
router.delete('/:id', verifyUser, deleteUser)
router.get('/:id', verifyUser, getSingleUser)
router.get('/', verifyAdmin, getAllUsers)

export default router
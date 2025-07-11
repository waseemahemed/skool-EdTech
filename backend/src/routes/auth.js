import express from 'express';
import { register, login ,logout,me , changePassword} from '../controllers/authController.js'; 
import protect from '../middlewares/auth.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get("/me", protect, me);
router.put("/change-password",protect,changePassword);

export default router; 

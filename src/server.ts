import express from 'express';
import { config } from './config/config';
import dotenv from 'dotenv';
import "./config/db";
import userRoutes from './routes/userRoutes';
import messageRoutes from './routes/messageRoutes';
import groupRoutes from './routes/groupRoutes';

dotenv.config();
const router = express();

router.use(express.json());
//router.use(cors());


router.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** Rules of API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

/** Routes */
router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
router.use('/groups', groupRoutes);

/** Health check */
router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    console.log(error);
    
    return res.status(404).json({ message: error.message });
})
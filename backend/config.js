import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://admin:admin@cluster0.cshhi.mongodb.net/yayskool?retryWrites=true&w=majority',
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
} 
import jwt from 'jsonwebtoken'; //! to ensure jwt token
import  {UserService}  from '../modules/auth/services/index.js';

//* auth middlware
export async function auth(req, res, next) {
try {
    //! verify the token if it starts with baearer to make sure if it's the right one if it's not return error 401
const header = req.headers.authorization;
if (!header || !header.startsWith('Bearer ')) return res.status(401).json({ message: 'Missing token' });

//! verifying the token by removin the bearer if it's the right token get the payload or the informations
const token = header.replace('Bearer ', '');
const payload = jwt.verify(token, process.env.JWT_SECRET);
//! extracting the user from the db by his ID if it's not the right token return error 401 anauthirizing
const user = await UserService.findById(payload.sub);
if (!user) return res.status(401).json({ message: 'Invalid token (user not found)' });

//* add user information to the request for route handlers to know the role of the user then the processing of the request
req.user = { id: user._id.toString(), role: user.role };
next();
} catch (err) {
return res.status(401).json({ message: 'Unauthorized', error: err.message });
}
}


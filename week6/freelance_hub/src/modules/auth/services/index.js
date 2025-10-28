import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/index.js';
export const UserService ={
    async sigup({email, password, role}){
        const exists= await User.findOne({email});
        if(exists)throw new Error('email is already used');
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({email, password:hash, role});
        return user;
    },
    async login({email, password}){
        const user = await User.findOne({email});
        if(!user) throw new Error('invalid credentials');
        const ok = await bcrypt.compare(password, user.password);
        if(!ok) throw new Error('invalid credentials');

        //!securety things by using jwt 
        const token = jwt.sign({sub: user._id.toString(), role: user.role},
                      process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN || '7d'});
                      return {user, token};
    },
    async findById(id){
        return User.findById(id);
    }
}
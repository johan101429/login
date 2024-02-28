import {Request,Response} from 'express';
import { product } from '../models/product';



export const getProducts = async (req:Request,res:Response)=> {
 const listtProducts = await product.findAll();

    res.json(listtProducts)
}
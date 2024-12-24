import { Response, Request } from "express";

export const getProducts= (req: Request, res: Response)=>{
    res.json({
        msg: 'Get products'       
    });
};

export const getProduct= (req: Request, res: Response)=>{
    const {id}= req.params;
    res.json({
        msg: 'Get product',
        id     
    });
};

export const deleteProduct= (req: Request, res: Response)=>{
    const {id}= req.params;
    res.json({
        msg: 'delete product',
        id     
    });
};

export const postProduct= (req: Request, res: Response)=>{
    const {body}= req;
    console.log(body);
    res.json({
        msg: 'Post product',
        body : body    
    });
};

export const updateProduct= (req: Request, res: Response)=>{
    const {body}= req;
    const {id}= req.params;
    console.log(body);
    res.json({
        msg: 'Post product',
        id,
        body
    });
};
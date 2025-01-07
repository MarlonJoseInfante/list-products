import { Response, Request, NextFunction } from "express";
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const listProducts = await Product.findAll();
        console.log(listProducts);
        res.json(listProducts);
    } catch (error) {
        next(error);
    }

};

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({
                message: `There is not product by id : ${id}`
            })
        }
    } catch (error) {
        next(error);
    }

    /*res.json({
        msg: 'Get product',
        id
    });*/

};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            res.status(404).json({
                message: `There is not product by id : ${id}`
            })
        } else {
            await product.destroy();
            res.json({
                message: `The product was eliminated`
            })
        }
    } catch (error) {
        next(error);
    }
};

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Product.create(body);
        res.json({
            message: 'Product created'
        });
    } catch (error) {
        res.json({
            message: 'It has occurred an error. Please, you contact to support'
        });
    }

};

export const updateProduct = async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const product= await Product.findByPk(id);
        if (product) {
            await product.update(body);
            res.json({
                message:'The product was update'
            })
        } else {
            res.status(404).json({
                message: `There is not product by id: ${id}`
            })
        }
    } catch (error) {
        res.json({
            message: 'It has occurred an error. Please, you contact to support'
        });
    }
};

//PARECE SER QUE HAY QUE PONER EL NEXT EN TODOS LOS METODOS. GETPRODUCT Y GERPRODUCTS AHORA FUNCIONAN
// BIEN PERO DELETE NO SI SOLICITO BORRAR DOS VECES CON EL MISMO ID A LA SEGUNDA VEZ APARECE EL ERROR
import { Router } from "express";
import { getProducts, getProduct, insertProduct,patchProduct as patchProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', insertProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

export default router;
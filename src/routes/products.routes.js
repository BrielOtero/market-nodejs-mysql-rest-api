import { Router } from "express";
import { getProducts, getProduct, insertProduct, putProduct,patchProduct as patchProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', insertProduct);
router.put('/:id', putProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

export default router;
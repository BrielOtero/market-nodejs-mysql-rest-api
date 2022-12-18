
import { pool } from '../db.js';


export const getProducts = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM products');
    try {
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getProduct = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM products WHERE id=?', [req.params.id]);
    try {
        if (rows.len <= 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};


export const insertProduct = async (req, res) => {
    const { name, image, stock, target_stock, quantity, measurement, ref_alcampo, quantity_alcampo, ref_carrefour, quantity_carrefour } = req.body;

    try {

        const [result] = await pool.query('INSERT INTO products (name,image,stock,target_stock,quantity,measurement,ref_alcampo,quantity_alcampo,ref_carrefour,quantity_carrefour) VALUES (?,?,?,?,?,?,?,?,?,?)', [name, image, stock, target_stock, quantity, measurement, ref_alcampo, quantity_alcampo, ref_carrefour, quantity_carrefour]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Product not created" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

/*
Json que se recibe
{
    "name":"Pistachos",
    "image":"",
    "stock":2,
    "target_stock":5,
    "quantity":1
    "measurement":"Kg"
    "ref_alcampo":4444,
    "quantity_alcampo": 1.3
    "ref_carrefour":5555,
    "quantity_carrefour": 1.3
}
*/

export const patchProduct = async (req, res) => {

    const { name, image, stock, target_stock, quantity, measurement, ref_alcampo, quantity_alcampo, ref_carrefour, quantity_carrefour } = req.body;
    const { id } = req.params;

    try {
        const [result] = await pool.query('UPDATE products SET name = IFNULL(?,name), image = IFNULL(?,image), stock = IFNULL(?,stock), target_stock = IFNULL(?,target_stock), quantity = IFNULL(?,quantity), measurement = IFNULL(?,measurement),ref_alcampo = IFNULL(?,ref_alcampo), quantity_alcampo = IFNULL(?,quantity_alcampo), ref_carrefour = IFNULL(?,ref_carrefour),quantity_carrefour = IFNULL(?,quantity_carrefour) WHERE id=?', [name, image, stock, target_stock, quantity, measurement, ref_alcampo, quantity_alcampo, ref_carrefour, quantity_carrefour, id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Product not updated" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteProduct = async (req, res) => {
    const [result] = await pool.query('DELETE FROM products WHERE id=?', [req.params.id]);
    try {
        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Product not deleted" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};


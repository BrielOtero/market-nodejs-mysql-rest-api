
import { pool } from '../db.js';

export const getProducts = async (req, res) => {
    try {

        const [rows] = await pool.query('SELECT * FROM products');
        res.json(rows);

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getProduct = async (req, res) => {
    try {

        const [rows] = await pool.query('SELECT * FROM products WHERE id=?', [req.params.id]);

        if (rows.len <= 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};


export const insertProduct = async (req, res) => {
    const { name, image, stock, target_stock, ref_alcampo, ref_carrefour } = req.body;

    try {

        const [rows] = await pool.query('INSERT INTO products (name,image,stock,target_stock,ref_alcampo,ref_carrefour) VALUES(?,?,?,?,?,?)', [name, image, stock, target_stock, ref_alcampo, ref_carrefour]);

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
    "ref_alcampo":4444,
    "ref_carrefour":5555
}
*/

export const putProduct = async (req, res) => {
    const { id } = req.params;
    const { name, image, stock, target_stock, ref_alcampo, ref_carrefour } = req.body;

    try {

        const [result] = await pool.query("UPDATE FROM products SET name=?,image=?,stock=?,target_stock=?,ref_alcampo=?,red_carrefour=? WHERE id=?", [name, image, stock, target_stock, ref_alcampo, ref_carrefour, id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Product not updated" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const patchProduct = async (req, res) => {
    const { id } = req.params;
    const { name, image, stock, target_stock, ref_alcampo, ref_carrefour } = req.body;

    try {

        const [result] = await pool.query("UPDATE FROM products SET name=IFNULL(?,name),IFNULL(?,image),stock=IFNULL(?,stock),target_stock=IFNULL(?,target_stock),ref_alcampo=IFNULL(?,ref_alcampo),red_carrefour=IFNULL(?,ref_carrefour) WHERE id=?", [name, image, stock, target_stock, ref_alcampo, ref_carrefour, id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Product not updated" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteProduct = async (req, res) => {
    try {

        const [result] = await pool.query('DELETE FROM products WHERE id=?', [req.params.id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Product not deleted" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

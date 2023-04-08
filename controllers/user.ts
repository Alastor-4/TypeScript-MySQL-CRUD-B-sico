import { Request, Response } from "express";
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll({ where: { state: true } });//aqui se busca pero se filtra si el estado esta en true
    res.json({ users });
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        res.status(400).json({
            msg: `No existe un usuario con el id ${id}`
        })
    } else {
        res.json(user);
    }
}

export const createUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const isEmailExist = await User.findOne({ where: { email: body.email } })
        if (isEmailExist) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el email: ${body.email}`,
            })
        }
        const user = await User.create(body);
        user.save();
        res.json(user);

    } catch (error) {
        res.status(500).json({ msg: 'Hable con el admin' })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({
                msg: `No existe un usuario con el id: ${id}`,
            })
        }
        await user.update(body);
        res.json(user);

    } catch (error) {
        res.status(500).json({ msg: 'Hable con el admin' })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el id: ${id}`,
        })
    }
    //para eliminacion fisica
    // await user.destroy();

    await user.update({ state: false })


    res.json(user)
}
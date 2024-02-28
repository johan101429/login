import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import jwt from 'jsonwebtoken'

export const newUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  //validamos si el usuario existe en la base de datos

  const user = await User.findOne({ where: { username: username } });
  if (user) {
    return res.status(400).json({
      message: "El usuario ya existe",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    //Guardamos usuarios en la base de datos
    await User.create({
      username: username,
      password: hashedPassword,
    });

    res.json({
      msg: "usuario " + username + " creado exitosamente ",
    });
  } catch (error) {
    res.status(400).json({
      msg: "Upps Ocurrio un error",
      error,
    });
  }

  console.log(hashedPassword);
};

export const loginUSer = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  // res.json({
  //   msg: "Login User",
  //   body,
  // });

  //validamos si el usuario existe en la base de datos
  const user: any = await User.findOne({ where: { username: username } });
  if (!user) {
    return res.status(400).json({
      msg: `No existe un usuario con el monbre ${username} en la base de datos `,
    });
  }

  //validamos password

  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(400).json({
      msg: `Password Incorrecta`,
    });
  }

  //generamos token

  const token  = jwt.sign({
    username: username
  }, process.env.SECRET_KEY || 'pepito123');

  res.json({token});
};

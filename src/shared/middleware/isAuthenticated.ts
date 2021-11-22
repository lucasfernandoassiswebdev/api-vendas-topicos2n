import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { verify } from "jsonwebtoken";

export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void {
    let authHeaders = request.headers.authorization

    if (!authHeaders) {
        throw new AppError('Token não está presente', 401)
    }

    let [bearer, token] = authHeaders.split(' ')

    try {
        const tokenVerificado = verify(token, 's3cr37k31')
        return next()
    } catch {
        throw new AppError('Token inválido', 401)
    }
}
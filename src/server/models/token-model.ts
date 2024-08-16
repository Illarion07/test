import mongoose from "mongoose";
import { Schema } from 'mongoose';

// модель описывающая типы полей токена в БД

const TokenSchema = new mongoose.Schema({
    admin: { type: Schema.Types.ObjectId, required: true, ref: 'Admin'}, // связываю токен с админом "One-To-One relationship"
    refreshToken: { type: String, required: true },
})

export const Token = mongoose.models?.Token || mongoose.model("Token", TokenSchema);
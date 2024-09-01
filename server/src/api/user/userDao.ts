import  User from "./models/userMongoModel";
import type { User as userZod } from "@/api/user/userModel";
export class UserDao{
    async createUser(username:string, password:string): Promise<userZod | null> {
        const user = await User.create({ username, password })
        return user
    }
} 
import { User } from '@prisma/client';
export declare class UserController {
    getMe(user: User): {
        id: number;
        createdAt: Date;
        updateAt: Date;
        email: string;
        hash: string;
        firstName: string;
        lastName: string;
    };
    editUser(): void;
}

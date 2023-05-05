import { UserType } from "~/types";

export const userTransformer = (user: UserType) => {
    return {
        id: user.id,
        name: user.name,
        email : user.email,
        username: user.username,
        userImage: user.userImage
    }
}
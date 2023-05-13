import { BuzzDataType } from "~/types";
import { prisma } from ".";

export const createBuzz = (buzzData: BuzzDataType) => {
    return prisma.buzzPost.create({
        data: buzzData
    })
}
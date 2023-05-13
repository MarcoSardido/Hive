import { BuzzMediaType } from "~/types";
import { prisma } from ".";

export const createMediaFile = (mediaFile: BuzzMediaType) => {
    return prisma.mediaFile.create({
        data: mediaFile
    })
}
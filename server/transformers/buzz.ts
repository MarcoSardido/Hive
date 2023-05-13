import { BuzzDataType } from "~/types"

export const buzzTransformer = (buzzData: BuzzDataType) => {
    return {
        id: buzzData.id,
        text: buzzData.text
    }
}
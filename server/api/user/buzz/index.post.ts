import formidable from 'formidable'
import { createBuzz } from '~/server/db/buzz'
import { createMediaFile } from '~/server/db/mediaFiles'
import { buzzTransformer } from '~/server/transformers/buzz'

export default defineEventHandler(async event => {
    const form = formidable({})

    const response = await new Promise((resolve, reject) => {
        form.parse(event.node.req, (error, fields, files) => {
            if (error) reject(error)

            resolve({ fields, files })
        })
    })
    const { fields, files } = response

    const userId = event.context.$auth?.user?.id
    const buzzData = {
        authorId: userId,
        text: fields.text,
    }

    const buzzPost = await createBuzz(buzzData)

    const buzzFiles = Object.keys(files).map(async key => {
        const imageFile = files[key]
        const cloudinaryResponse = await uploadToCloudinary(imageFile.filepath)

        return createMediaFile({
            url: cloudinaryResponse.secure_url,
            providerPublicId: cloudinaryResponse.public_id,
            userId: userId,
            buzzId: buzzPost.id
        })
    })

    await Promise.all(buzzFiles)

    return {
        buzzPostData: buzzTransformer(buzzPost)
    }
})
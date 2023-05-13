interface formTypes {
    text: string,
    mediaFiles: []
}

export default () => {
    const postBuzz = (formData: formTypes) => {
        const form = new FormData()
        form.append('text', formData.text)
        formData.mediaFiles.forEach((mediaFile, idx) => {
            form.append(`media_file_${idx}`, mediaFile)
        })

        return useFetchApi('/api/user/buzz', {
            method: 'POST',
            body: form
        })
    }

    return { postBuzz }
}
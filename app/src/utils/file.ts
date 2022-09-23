export async function saveImageToPhotosAlbum(url: string) {
    if (!url) return uni.$u.toast('图片不存在')
    //#ifdef H5
    uni.$u.$toast('长按图片保存')
    //#endif
    try {
        const res: any = await uni.downloadFile({ url, timeout: 10000 })
        await uni.saveImageToPhotosAlbum({
            filePath: res.tempFilePath
        })
        uni.showToast({
            title: '保存成功',
            icon: 'success'
        })
    } catch (error: any) {
        uni.$u.toast(error.errMsg || '保存失败')
    }
}

import loadImage from "blueimp-load-image"
import { useSetAtom } from "jotai"
import { useNavigate } from "react-router-dom"
import { postImages } from "../../api/index.js"
import albumIcon from "../../assets/icon/button/camera/album.png"
import cameraIcon from "../../assets/icon/button/camera/camera.png"
import { imageAtom, loadingAtom } from "../../atoms/index.js"

// const uploadImage = () => {
//     const response = 0
//     return response
// }

const UploadButtons = () => {
    const navigate = useNavigate()
    const setLoading = useSetAtom(loadingAtom)
    const setImage = useSetAtom(imageAtom)
    // const wait = () => new Promise((resolve) => setTimeout(resolve, 1000))

    // const upload = async () => {
    //     setLoading(true)
    //     // let data = ""
    //     await wait()
    //     // data = "data"
    //     setLoading(false)
    //     // console.log(data)
    //     navigate("/summary")
    // }

    const onUpload = async (e) => {
        setLoading(true)
        const file = e.target.files[0]
        // console.log(img)
        // alert(img)
        const formData = new FormData()
        loadImage(
            file,
            function (img, data) {
                // 2. 이미지 파일 데이터에 imageHead와 exif가 있는지 확인
                if (data.imageHead && data.exif) {
                    // 3. exif 값이 있다면 orientation 값을 1로 변경
                    loadImage.writeExifData(
                        data.imageHead,
                        data,
                        "Orientation",
                        1
                    )
                    img.toBlob(function (blob) {
                        loadImage.replaceHead(
                            blob,
                            data.imageHead,
                            async function (newBlob) {
                                newBlob.name = file.name
                                // 4. 기존 메서드로 파일 s3에 업로드
                                formData.append("file", newBlob)
                            }
                        )
                    }, "image/jpeg")
                } else {
                    // exif 값 없으면 바로 s3에 업로드
                    formData.append("file", file)
                }
            },
            { meta: true, orientation: true, canvas: true }
        )

        const response = await postImages(formData)
        console.log(response)
        // setUuid(response.data.result.imageUuid)
        setImage({
            uuid: response.data.result.imageUuid,
            path: response.data.result.filePath,
        })
        setLoading(false)
        navigate("/summary")
    }
    //
    // const onChange = (e) => {
    //     const img = e.target.files[0]
    //     const formData = new FormData()
    //     formData.append("img", img)
    //     console.log(formData) // FormData {}
    //     for (const keyValue of formData) console.log(keyValue) // ["img", File] File은 객체
    // }

    return (
        <div className="px-5 flex justify-start gap-2 overflow-x-scroll scrollbar-hide max-w-full">
            <label
                className="flex flex-row justify-between gap-2.5
                bg-btn border border-border
                rounded-full px-4 py-2.5 whitespace-nowrap cursor-pointer "
            >
                <div className="w-6 h-6">
                    <img src={cameraIcon} alt="icon" />
                </div>

                <div className="font-medium select-none">지금 사진 찍기</div>

                <input
                    id="camera"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    capture
                    className="hidden"
                    onChange={onUpload}
                />
            </label>
            <label
                className="flex flex-row justify-between gap-2.5
                bg-btn border border-border
                rounded-full px-4 py-2.5 whitespace-nowrap cursor-pointer"
            >
                <div className="w-6 h-6">
                    <img src={albumIcon} alt="icon" />
                </div>

                <div className="font-medium select-none">앨범에서 고르기</div>

                <input
                    id="album"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    className="hidden"
                    onChange={onUpload}
                />
            </label>
        </div>
    )
}

export default UploadButtons

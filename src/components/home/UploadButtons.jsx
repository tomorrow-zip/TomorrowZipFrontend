import { useSetAtom } from "jotai"
import { useNavigate } from "react-router-dom"
import albumIcon from "../../assets/icon/button/camera/album.png"
import cameraIcon from "../../assets/icon/button/camera/camera.png"
import { loadingAtom } from "../../atoms/index.js"

// const uploadImage = () => {
//     const response = 0
//     return response
// }

const UploadButtons = () => {
    const navigate = useNavigate()
    const setLoading = useSetAtom(loadingAtom)
    const wait = () => new Promise((resolve) => setTimeout(resolve, 1000))

    const upload = async () => {
        setLoading(true)
        let data = ""
        await wait()
        data = "data"
        setLoading(false)
        // console.log(data)
        navigate("/summary", data)
    }
    return (
        <div className="px-5 flex justify-start gap-2 overflow-x-scroll scrollbar-hide max-w-full">
            <label
                className="flex flex-row justify-between gap-2.5
                bg-btn border border-border
                rounded-full px-4 py-2.5 whitespace-nowrap cursor-pointer "
                onClick={upload}
            >
                <div className="w-6 h-6">
                    <img src={cameraIcon} alt="icon" />
                </div>

                <div className="font-medium select-none">지금 사진 찍기</div>

                {/*<input*/}
                {/*    id="camera"*/}
                {/*    type="file"*/}
                {/*    accept="image/png,image/jpeg,image/jpg"*/}
                {/*    capture*/}
                {/*    className="hidden"*/}
                {/*    onChange={upload}*/}
                {/*/>*/}
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
                    onChange={upload}
                />
            </label>
        </div>
    )
}

export default UploadButtons

import albumIcon from "../../assets/icon/button/camera/album.png"
import cameraIcon from "../../assets/icon/button/camera/camera.png"

const UploadButtons = () => {
    return (
        <div className="px-5 flex justify-start gap-2 overflow-x-scroll scrollbar-hide">
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
                />
            </label>
        </div>
    )
}

export default UploadButtons

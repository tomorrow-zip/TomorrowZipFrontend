import ExampleImg from "../../assets/img/example.jpeg"
import ListContainer from "../common/ListContainer.jsx"

const AnalysisSummary = () => {
    return (
        <ListContainer button className="mx-4">
            <div className="flex justify-between items-center gap-2 px-5 py-4">
                <div>
                    <h3 className="text-lg font-bold">집을 분석해봤어요!</h3>
                    <div className="text-text-gray text-sm">
                        <div>사진을 바탕으로 집을 분석해봤어요!</div>
                        <div>
                            <span className="font-bold">아늑함</span> 78.8%
                        </div>
                        <div>
                            <span className="font-bold">모던 인테리어</span>{" "}
                            91.2%
                        </div>
                        <div>
                            <span className="font-bold">베이지 톤</span> 65.3%
                        </div>
                    </div>
                </div>
                <img
                    src={ExampleImg}
                    className="w-28 h-28 object-center object-cover rounded-lg"
                    alt="example"
                />
            </div>
        </ListContainer>
    )
}

export default AnalysisSummary

import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";

const PageContent = ({ userName }) => {
    return (
        <div className="page-content">
            <MainPage />
            <CounterPage userName={userName}/>
        </div>
    )
}

export default PageContent;
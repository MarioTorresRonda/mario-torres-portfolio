import Message from "@/components/fragments/Message";
import Tooltip from "@/components/fragments/Tooltip";

export default function End( { endCode } ) {

    function onHandleClick() {
        window.scrollTo({top: 0});
    }

    return <div className="mb-10 mt-5 text-4xl">
        <div className="flex mx-2">
            <div className="flex-1">
                <Message code={endCode} /> 
            </div>
            <button onClick={onHandleClick}>
                <Tooltip text={["mainPage", "blogs", "scrollToTop"]}>
                    ^
                </Tooltip>
            </button>           
        </div>
        <div className="w-full h-2 overflow-hidden"> 
            <div className="h-20 w-full color-fondo"> </div>
        </div>
    </div>
}
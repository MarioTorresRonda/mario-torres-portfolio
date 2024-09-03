import Modal from "@/components/fragments/Modal";
import { useMessageText } from "@/hooks/useMessageText";
import Message from "@/components/fragments/Message";
import { useRouter } from 'next/navigation'

export default function RiskyModal( {url, modalRef} ) {
    
    const router = useRouter()

    function onHandleSubmit() {
        router.push(url, { scroll: false })
	}
    
    return ( <Modal
        title={useMessageText(["commons", "riskyUrl", "title"])}
        submit={true}
        onSubmit={onHandleSubmit}
        ref={modalRef}
        cancelText={useMessageText(["commons", "riskyUrl", "back"])}
        submitText={useMessageText(["commons", "riskyUrl", "accept"])}
    >
        <>
            <Message code={["commons", "riskyUrl", "desc"]}></Message>
            <p className="font-bold"> <Message code={["commons", "riskyUrl", "to"]}></Message> <span className="text-[--myColorStartSimple]">{url}</span></p>
        </>
    </Modal> )
}
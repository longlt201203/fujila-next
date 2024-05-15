import QuillInput from "@/app/dashboard/chat-with-fujila/components/ChatInput";
import MessagesBox from "@/app/dashboard/chat-with-fujila/components/MessagesBox";

export default function ChatWithFujilaPage() {
    return (
        <div className="flex flex-col gap-y-2 h-full overflow-auto">
            <MessagesBox/>
            <QuillInput/>
        </div>
    );
}
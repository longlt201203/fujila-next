import MessageImage from "@/app/dashboard/chat-with-fujila/components/MessageImage";
import MessageParagraph from "@/app/dashboard/chat-with-fujila/components/MessageParagraph";

export default function MessagesBox() {
    return (
        <div className="h-full flex flex-col justify-end gap-y-2 overflow-auto">
            <div className="w-full flex justify-start">
                <div className="rounded-lg bg-themeColors-crystalBlue p-2 flex flex-col gap-y-1 max-w-2xl">
                    <MessageParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum enim sed tellus commodo hendrerit. Ut aliquet, sapien nec vehicula laoreet, mauris metus finibus sem, nec commodo erat lorem in tortor. Curabitur nec odio non quam ornare tempor. Ut ut nisi vitae sem condimentum pretium at at velit.</MessageParagraph>
                    <div className="flex gap-x-2">
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end">
                <div className="rounded-lg bg-themeColors-royalBlue p-2 flex flex-col gap-y-1 max-w-2xl">
                    <MessageParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum enim sed tellus commodo hendrerit. Ut aliquet, sapien nec vehicula laoreet, mauris metus finibus sem, nec commodo erat lorem in tortor. Curabitur nec odio non quam ornare tempor. Ut ut nisi vitae sem condimentum pretium at at velit.</MessageParagraph>
                    <div className="flex gap-x-2">
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-start">
                <div className="rounded-lg bg-themeColors-crystalBlue p-2 flex flex-col gap-y-1 max-w-2xl">
                    <MessageParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum enim sed tellus commodo hendrerit. Ut aliquet, sapien nec vehicula laoreet, mauris metus finibus sem, nec commodo erat lorem in tortor. Curabitur nec odio non quam ornare tempor. Ut ut nisi vitae sem condimentum pretium at at velit.</MessageParagraph>
                    <div className="flex gap-x-2">
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end">
                <div className="rounded-lg bg-themeColors-royalBlue p-2 flex flex-col gap-y-1 max-w-2xl">
                    <MessageParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum enim sed tellus commodo hendrerit. Ut aliquet, sapien nec vehicula laoreet, mauris metus finibus sem, nec commodo erat lorem in tortor. Curabitur nec odio non quam ornare tempor. Ut ut nisi vitae sem condimentum pretium at at velit.</MessageParagraph>
                    <div className="flex gap-x-2">
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                        <MessageImage src="https://th.bing.com/th/id/OIP._6lh4TU71OW46So33wueqgHaHa?rs=1&pid=ImgDetMain" />
                    </div>
                </div>
            </div>
        </div>
    )
}
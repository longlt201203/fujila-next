"use client"

import Button, { UploadFileButton } from "@/components/Button";
import { useCallback, useEffect, useState } from "react";
import { Descendant, Element, Transforms, createEditor } from "slate";
import { Editable, RenderElementProps, Slate, withReact } from "slate-react";

function InputImage(props: RenderElementProps & { src: string }) {
    return (
        <div style={{ width: "150px", height: "150px" }}>
            <img src={props.src} className="block h-full w-full object-cover object-center" />
            <div className="hidden">{props.children}</div>
        </div>
    )
}

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [{ text: '' }],
    },
]

export default function ChatInput() {
    const [editor] = useState(() => withReact(createEditor()));

    const renderElement = useCallback((props: RenderElementProps) => {
        switch (props.element.type) {
            case "image":
                return <InputImage {...props} src={props.element.src} />
            default:
                return <p {...props.attributes}>{props.children}</p>
        }
    }, []);

    const handleChange = (v: Descendant[]) => {
        // console.log(v);
    }

    const handleFileChange = (files: FileList | null) => {
        if (files) {
            Transforms.insertNodes(
                editor, [
                    { type: "image", src: "https://th.bing.com/th/id/OIP.QsI8gYdDz3o1dfimmzB5NgHaLS?rs=1&pid=ImgDetMain", children: [{ text: "" }] },
                    { type: "paragraph", children: [{ text: "" }] }
                ]);
        }
    }

    return (
        <Slate editor={editor} initialValue={initialValue} onValueChange={handleChange}>
            <div className="border rounded-lg flex flex-row items-center gap-x-1 p-1">
                <Editable className="outline-none font-body w-full" renderElement={renderElement} />
                <UploadFileButton inputId="goodjob" size="small" variant="crystalBlue" onFilesChange={handleFileChange}>Image</UploadFileButton>
                <Button size="small">Send</Button>
            </div>
        </Slate>
    );
};
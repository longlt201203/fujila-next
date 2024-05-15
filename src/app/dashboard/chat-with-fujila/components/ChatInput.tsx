"use client"

import Button, { UploadFileButton } from "@/components/Button";
import { useCallback, useState } from "react";
import { Descendant, Editor, Transforms, createEditor } from "slate";
import { Editable, RenderElementProps, Slate, withReact } from "slate-react";
import isUrl from "is-url";
import imageExtensions from "image-extensions";

function InputImage(props: RenderElementProps & { src: string }) {
    return (
        <div style={{ width: "150px", height: "150px" }}>
            {props.children}
            <img src={props.src} className="block h-full w-full object-cover object-center border-x-themeColors-silverBlue border-4 rounded-lg" />
            {/* <div className="hidden">{props.children}</div> */}
        </div>
    )
}

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [{ text: '' }],
    },
]

function withImages(editor: Editor) {
    const { insertData, isVoid } = editor;

    editor.isVoid = (ele) => ele.type == "image" ? true : isVoid(ele);
    editor.insertData = (data) => {
        const text = data.getData("text/plain");
        // const { files } = data;
        // for (let i = 0; i < files.length; i++) {
        //     const file = files.item(i);
        //     if (file) {

        //     }
        // }
        if (isImageUrl(text)) {
            insertImage(editor, text);
        } else {
            const data = new DataTransfer()
            data.setData("text/plain", text);
            insertData(data);
        }

        
    }

    return editor;
}

function isImageUrl(url: string) {
    if (!url) return false;
    if (!isUrl(url)) return false;
    const ext = new URL(url).pathname.split('.').pop();
    return ext && imageExtensions.includes(ext);
  }

function insertImage(editor: Editor, src: string) {
    Transforms.insertNodes(
        editor, [
            { type: "image", src: src, children: [{ text: "" }] },
            { type: "paragraph", children: [{ text: "" }] }
        ]);
}

export default function ChatInput() {
    const [editor] = useState(() => withImages(withReact(createEditor())));

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
            for (let i = 0; i < files.length; i++) {
                const file = files.item(i);
                if (file) {
                    const url = URL.createObjectURL(file);
                    insertImage(editor, url);
                }
            }
        }
    }

    return (
        <Slate editor={editor} initialValue={initialValue} onValueChange={handleChange}>
            <div className="border rounded-lg flex flex-row items-center gap-x-1 p-1">
                <Editable className="outline-none font-body w-full" renderElement={renderElement} />
                <UploadFileButton inputId="goodjob" size="small" variant="crystalBlue" onFilesChange={handleFileChange} multiple>Image</UploadFileButton>
                <Button size="small">Send</Button>
            </div>
        </Slate>
    );
};
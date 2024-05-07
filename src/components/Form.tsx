import { PropsWithChildren } from "react";

export interface TextInputProps {
    label?: string;
    placeholder?: string;
    isPassword?: boolean;
}

function TextInput(props: TextInputProps) {
    return (
        <div className="flex flex-col w-full">
            {props.label && <label className="font-label text-themeColors-silverBlue">{props.label}</label>}
            <input type={props.isPassword ? "password" : "text"} className="p-2 font-body outline-none border-b focus:border-themeColors-royalBlue" placeholder={props.placeholder} />
        </div>
    );
}

function VerticalGroup(props: PropsWithChildren) {
    return (
        <div className="flex flex-col gap-y-2">
            {props.children}
        </div>
    );
}

const Form = {
    TextInput,
    VerticalGroup
};

export default Form;
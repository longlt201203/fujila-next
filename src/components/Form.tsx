import { PropsWithChildren } from "react";

export interface TextInputProps {
    label?: string;
    placeholder?: string;
    isPassword?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

function TextInput(props: TextInputProps) {
    return (
        <div className="flex flex-col w-full">
            {props.label && <label className="font-label text-themeColors-silverBlue">{props.label}</label>}
            <input type={props.isPassword ? "password" : "text"} className="p-2 font-body outline-none border-b focus:border-themeColors-royalBlue" placeholder={props.placeholder} value={props.value} onChange={(e) => props.onChange && props.onChange(e.target.value)} />
        </div>
    );
}

export interface SelectInputProps {
    label?: string;
    options: { value: string, label: string }[];
}

function SelectInput(props: SelectInputProps) {
    return (
        <div className="flex flex-col w-full">
            {props.label && <label className="font-label text-themeColors-silverBlue">{props.label}</label>}
            <select className="p-2 font-body outline-none">
                {props.options.map(item => (<option key={item.value} value={item.value}>{item.label}</option>))}
            </select>
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
    VerticalGroup,
    SelectInput
};

export default Form;
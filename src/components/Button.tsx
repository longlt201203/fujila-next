import { AnchorHTMLAttributes, ButtonHTMLAttributes, ChangeEventHandler, DetailedHTMLProps, LabelHTMLAttributes } from "react";

const classMapping = {
    base: "block rounded-lg transition-all font-label text-center hover:cursor-pointer",
    // variants
    royalBlue: "border-themeColors-royalBlue bg-themeColors-royalBlue text-white hover:bg-white hover:text-themeColors-royalBlue",
    crystalBlue: "border-themeColors-crystalBlue bg-themeColors-crystalBlue text-white hover:bg-white hover:text-themeColors-crystalBlue",
    danger: "border-red-400 bg-red-400 text-white hover:bg-white hover:text-red-400",
    royalBlueOutlined: "border-themeColors-royalBlue bg-white text-themeColors-royalBlue hover:bg-themeColors-royalBlue hover:text-white",
    // sizes
    small: "p-1 border-2 text-sm",
    medium: "px-2 py-2 border-4",
    large: "px-5 py-3 border-4 text-lg",
};

export interface ButtonProps {
    variant?: "royalBlue" | "royalBlueOutlined" | "crystalBlue" | "danger",
    size?: "small" | "medium" | "large",
}

export default function Button(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps) {
    return (
        <button {...props} className={`${classMapping.base} ${classMapping[props.size || "medium"]} ${classMapping[props.variant || "royalBlue"]}` + " " + props.className}/>
    );
}

export function LinkButton(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & ButtonProps) {
    return (
        <a {...props} className={`${classMapping.base} ${classMapping[props.size || "medium"]} ${classMapping[props.variant || "royalBlue"]}` + " " + props.className} />
    );
}

export interface UploadFileButtonProps {
    inputId: string;
    multiple?: boolean;
    onFilesChange?: (files: FileList | null) => void;
}

export function UploadFileButton(props: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & ButtonProps & UploadFileButtonProps) { 
    return (
        <div>
            <label {...props} className={`${classMapping.base} ${classMapping[props.size || "medium"]} ${classMapping[props.variant || "royalBlue"]}` + " " + props.className} htmlFor={props.inputId} />
            <input type="file" id={props.inputId} className="hidden" onChange={(e) => props.onFilesChange && props.onFilesChange(e.target.files)} multiple={props.multiple} />
        </div>
    )
}
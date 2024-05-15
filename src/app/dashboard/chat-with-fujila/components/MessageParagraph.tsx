import { PropsWithChildren } from "react";

export default function MessageParagraph(props: PropsWithChildren) {
    return <p className="font-body text-white">{props.children}</p>;
}
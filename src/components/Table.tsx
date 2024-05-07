import { PropsWithChildren } from "react";

export function TableHeadCell(props: PropsWithChildren) {
    return (
        <th className="font-label p-3">{props.children}</th>
    )
}

export function TableHead(props: PropsWithChildren) {
    return (
        <thead className="border-b">
            {props.children}
        </thead>
    )
}

export function TableBody(props: PropsWithChildren) {
    return (
        <tbody>{props.children}</tbody>
    )
}

export function TableRow(props: PropsWithChildren) {
    return (
        <tr>{props.children}</tr>
    );
}

export function TableCell(props: PropsWithChildren) {
    return (
        <td className="font-body p-3">{props.children}</td>
    )
}

export function Table(props: PropsWithChildren) {
    return (
        <table className="">
            {props.children}
        </table>
    )
}
import { DetailedHTMLProps, HTMLAttributes } from "react";

function Display6xl(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h1 {...props} className={`font-display text-6xl` + " " + props.className} />
}

function Display4xl(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h1 {...props} className={`font-display text-4xl` + " " + props.className} />
}

function SubDisplay(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h1 {...props} className={`font-heading text-xl` + " " + props.className} />
}

function MediumBody(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <p {...props} className={`font-body` + " " + props.className} />
}

function SmallBody(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <p {...props} className={`font-body text-sm` + " " + props.className} />
}

function H1(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h1 {...props} className={`font-heading text-4xl font-semibold` + " " + props.className} />
}

function H2(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h2 {...props} className={`font-heading text-2xl font-semibold` + " " + props.className} />
}

function H3(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h3 {...props} className={`font-heading text-xl font-semibold` + " " + props.className} />
}

const Typography = {
    Display6xl,
    Display4xl,
    SubDisplay,
    MediumBody,
    SmallBody,
    H1,
    H2,
    H3
};

export default Typography;
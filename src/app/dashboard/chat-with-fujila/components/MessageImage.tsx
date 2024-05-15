export default function MessageImage(props: { src: string }) {
    return (
        <div style={{ width: "150px", height: "150px" }}>
            <img src={props.src} className="block h-full w-full object-cover object-center border-x-themeColors-silverBlue border-4 rounded-lg" />
        </div>
    )
}
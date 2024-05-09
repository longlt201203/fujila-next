import { LinkButton } from "@/components/Button";
import Typography from "@/components/Typography";

export default function ForbidenPage() {
    return (
        <div>
            <Typography.H2>Forbiden Resource!</Typography.H2>
            <LinkButton href="/login" size="small" variant="crystalBlue">Login Again</LinkButton>
        </div>
    );
}
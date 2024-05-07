import Button from "@/components/Button";
import Form from "@/components/Form";
import { Table, TableBody, TableHead, TableHeadCell, TableRow } from "@/components/Table";

export default function ChatHistoriesPage() {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <Form.TextInput label="Username" placeholder="Enter username..." />
                <Form.SelectInput label="Chat" options={[{ label: "Hi!", value: "" }]} />
                <Button>Show chat histories</Button>
            </div>
            <div className="">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>#</TableHeadCell>
                            <TableHeadCell>User Text</TableHeadCell>
                            <TableHeadCell>Bot Response</TableHeadCell>
                            <TableHeadCell>Create At</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                </Table>
            </div>
        </div>
    );
}
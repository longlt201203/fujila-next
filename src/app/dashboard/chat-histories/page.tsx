import Button from "@/components/Button";
import Form from "@/components/Form";
import { Table, TableBody, TableHead, TableHeadCell, TableRow } from "@/components/Table";

export default function ChatHistoriesPage() {
    return (
        <div>
            <div className="flex flex-col gap-1">
                <Form.TextInput label="Username" placeholder="Enter username..." />
                <Button>Show chat histories</Button>
            </div>
            <div className="">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>#</TableHeadCell>
                            <TableHeadCell></TableHeadCell>
                            <TableHeadCell>#</TableHeadCell>
                            <TableHeadCell>#</TableHeadCell>
                            <TableHeadCell>#</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                </Table>
            </div>
        </div>
    );
}
import { getAllUsers } from "@/actions/user.actions";
import Button from "@/components/Button";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "@/components/Table";

export default async function UsersPage() {
    const users = await getAllUsers();

    return (
        <div className="">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>#</TableHeadCell>
                        <TableHeadCell>Username</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Created At</TableHeadCell>
                        <TableHeadCell>Manage</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.createdAt.toLocaleString()}</TableCell>
                            <TableCell>
                                <Button size="small">Chat Histories</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
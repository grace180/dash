import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ListDetailsNoButton() {
  function createData(person, date, category, description, total, status) {
    return { person, date, category, description, total, status };
  }

  const rows = [
    createData("Andy", "09-09-2025", "Service Fee", "Rekapitulasi tagihan pemakaian penginapan periode juni 2025", "Rp2 M", "In Progress"),
    createData("Sarah", "09-09-2025", "BFKO", "Angsuran BFKO", "Rp10 M", "Complete"),
    createData("Agus", "09-09-2025", "CC Card", "Rekapitulasi tagihan kartu kredit korporat bank BNI untuk SPPD periode jatuh tempo 9 Agustus 2025", "Rp5 M", "In Progress"),
    createData("Dewi", "10-09-2025", "Service Fee", "Rekapitulasi tagihan pemakaian penginapan periode agustus 2025", "Rp1.5 M", "Complete"),
  ];

  return (
    <div className="mt-8">
      <TableContainer component={Paper} sx={{ borderRadius: "12px", overflow: "hidden" }}>
        <Table sx={{ minWidth: 600 }} aria-label="transaction table">
          <TableHead className="bg-[#d9d9d9]">
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>Person</TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>Category</TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>Description</TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>Total</TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                }}
              >
                <TableCell component="th" scope="row">
                  <span className="font-medium">{row.person}</span>
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.total}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListDetailsNoButton;

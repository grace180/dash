import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function ListDetails({ onViewPerson }) {
  function createData(person, date, category, description, total, status) {
    return { person, date, category, description, total, status };
  }

  const rows = [
    createData("MOH.Andy", "09-09-2025", "BFKO", "Angsuran BFKO", "Rp10 M", "Complete"),
    createData("Sarah", "09-09-2025", "BFKO", "Angsuran BFKO", "Rp10 M", "Complete"),
    createData("Agus", "09-09-2025", "BFKO", "Angsuran BFKO", "Rp10 M", "In Progress"),
  ];

  const handleViewClick = (person) => {
    console.log("View clicked for:", person);
    // Call the navigation function passed from App.jsx
    if (onViewPerson) {
      onViewPerson(person);
    }
  };

  return (
    <div className="mt-8">
      <TableContainer component={Paper} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
        <Table sx={{ minWidth: 600 }} aria-label="transaction table">
          <TableHead className="bg-[#d9d9d9]">
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Person</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Date</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Category</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Description</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Total</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff'
                }}
              >
                <TableCell component="th" scope="row">
                  <div className="flex flex-col">
                    <span className="font-medium">{row.person}</span>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: '#6c9bd1',
                        color: 'white',
                        textTransform: 'none',
                        fontSize: '11px',
                        padding: '2px 12px',
                        marginTop: '4px',
                        width: 'fit-content',
                        '&:hover': {
                          backgroundColor: '#5a88c0'
                        }
                      }}
                      onClick={() => handleViewClick(row.person)}
                    >
                      View
                    </Button>
                  </div>
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

export default ListDetails;
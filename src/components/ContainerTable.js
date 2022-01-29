import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TBody from "./TBody";

const tableTitles = [
  "#",
  "Name",
  "Price",
  "Price Change",
  "Market Cap",
  "Volume(24h)",
  "Circulating Supply",
];

const ContainerTable = ({ coins, search }) => {

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TableContainer
      sx={{
        mt: 2,
        boxShadow: 4,
        borderRadius: 3,
        bgcolor: "background.paper",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {tableTitles.map((title, index) => (
              <TableCell key={index} sx={{fontWeight: 'bold'}}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCoins.map(coin => (
            <TBody key={coin.id} coin={coin}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContainerTable;

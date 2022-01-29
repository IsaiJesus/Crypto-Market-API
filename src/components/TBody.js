import { TableCell, TableRow } from '@mui/material';

const TBody = ({ coin }) => {
  return (
    <TableRow>
      <TableCell>{coin.market_cap_rank}</TableCell>
      <TableCell
        sx={{ display: "flex", alignItems: "center", fontWeight: "medium" }}
      >
        <img
          src={coin.image}
          alt={coin.name}
          width="22"
          style={{ marginRight: "8px" }}
        />
        <span style={{ marginRight: "8px" }}>{coin.name}</span>
        <span>{coin.symbol.toUpperCase()}</span>
      </TableCell>
      <TableCell>${coin.current_price}</TableCell>
      <TableCell
        sx={{
          color:
            coin.price_change_percentage_24h > 0
              ? "success.main"
              : "error.main",
          fontWeight: "medium"
        }}
      >
        
        {coin.price_change_percentage_24h}%
      </TableCell>
      <TableCell>${coin.market_cap}</TableCell>
      <TableCell>${coin.total_volume}</TableCell>
      <TableCell>
        <span style={{ marginRight: "8px" }}>{coin.circulating_supply}</span>
        <span>{coin.symbol.toUpperCase()}</span>
      </TableCell>
    </TableRow>
  );
};

export default TBody;

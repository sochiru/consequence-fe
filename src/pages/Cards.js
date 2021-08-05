import React from 'react';
import {
  Table, CircularProgress, TableHead, TableRow, TableCell, TableBody, Box, Typography
} from '@material-ui/core';
import useCards from 'hooks/useCards';
import PAGES from 'constants/pages';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Cards = () => {
  const { cards } = useCards();

  if (cards.isLoading) {
    return <CircularProgress />;
  }

  if (cards.data) {
    return (
      <Box p={2}>
        <Box mb={2}>
          <Typography variant="h4">Cards</Typography>
        </Box>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Account ID</TableCell>
              <TableCell>Display Name</TableCell>
              <TableCell>Card Network</TableCell>
              <TableCell>Card Type</TableCell>
              <TableCell>Partial Card Number</TableCell>
              <TableCell>Name on Card</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Update Timestamp</TableCell>
              <TableCell>Provider</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.data.results.map((account) => (
              <TableRow key={account.account_id}>
                <TableCell component="th" scope="row">
                  <Typography
                    component={NavLink}
                    variant="button"
                    to={`${PAGES.CARDS}/${account.account_id}`}
                    color="inherit"
                  >
                    {account.account_id}
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  {account.display_name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {account.card_network}
                </TableCell>
                <TableCell component="th" scope="row">
                  {account.card_type}
                </TableCell>
                <TableCell component="th" scope="row">
                  {account.partial_card_number}
                </TableCell>
                <TableCell component="th" scope="row">
                  {account.name_on_card}
                </TableCell>
                <TableCell component="th" scope="row">
                  {account.currency}
                </TableCell>
                <TableCell component="th" scope="row">
                  {account.update_timestamp}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography>{account.provider.provider_id || ''}</Typography>
                  <Typography>{account.provider.display_name || ''}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    );
  }

  return null;
};

export default Cards;

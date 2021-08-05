import React from 'react';
import {
  Table, CircularProgress, TableHead, TableRow, TableCell, TableBody, Box, Typography
} from '@material-ui/core';
import useAccounts from 'hooks/useAccounts';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import PAGES from 'constants/pages';

const Accounts = () => {
  const { accounts } = useAccounts();

  if (accounts.isLoading) {
    return <CircularProgress />;
  }

  if (accounts.data) {
    return (
      <Box p={2}>
        <Box mb={2}>
          <Typography variant="h4">Accounts</Typography>
        </Box>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Account ID</TableCell>
              <TableCell>Display Name</TableCell>
              <TableCell>Account Type</TableCell>
              <TableCell>Account Number</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Updated Timestamp</TableCell>
              <TableCell>Provider</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.data.results.map((account) => (
              <TableRow key={account.account_id}>
                <TableCell component="th" scope="row">
                  <Typography
                    component={NavLink}
                    variant="button"
                    to={`${PAGES.ACCOUNTS}/${account.account_id}`}
                    color="inherit"
                  >
                    {account.account_id}
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  {account.display_name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {account.account_type}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography>{account.account_number.number || ''}</Typography>
                  <Typography>{account.account_number.sort_code || ''}</Typography>
                  <Typography>{account.account_number.swift_bic || ''}</Typography>
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

export default Accounts;

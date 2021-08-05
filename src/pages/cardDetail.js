import React from 'react';
import {
  Table, CircularProgress, TableHead, TableRow, TableCell, TableBody, Box, Typography, Tabs, Tab
} from '@material-ui/core';
import useCardDetail from 'hooks/useCardDetail';
import TabPanel from 'components/TabPanel/TabPanel';

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const CardDetail = () => {
  const {
    id: cardId, cardTransactions, cardTransactionsPending, value, handleChange
  } = useCardDetail();

  if (cardTransactions.isLoading) {
    return <CircularProgress />;
  }

  const renderTable = (data) => (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Transaction ID</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Transaction Type</TableCell>
          <TableCell>Transaction Category</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Running Balance</TableCell>
          <TableCell>Currency</TableCell>
          <TableCell>Merchant Name</TableCell>
          <TableCell>Timestamp</TableCell>
          <TableCell>Meta</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((transaction) => (
          <TableRow key={transaction.transaction_id}>
            <TableCell component="th" scope="row">
              {transaction.transaction_id}
            </TableCell>
            <TableCell component="th" scope="row">
              {transaction.description}
            </TableCell>
            <TableCell component="th" scope="row">
              {transaction.transaction_type}
            </TableCell>
            <TableCell component="th" scope="row">
              {transaction.transaction_category}
            </TableCell>
            <TableCell component="th" scope="row">
              {transaction.amount}
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography>{transaction.running_balance?.amount || ''}</Typography>
              <Typography>{transaction.running_balance?.currency || ''}</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              {transaction.currency}
            </TableCell>
            <TableCell component="th" scope="row">
              {transaction.merchant_name}
            </TableCell>
            <TableCell component="th" scope="row">
              {transaction.timestamp}
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography>{transaction.meta.provider_transaction_category || ''}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <Box p={2}>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Transactions" value="transactions" {...a11yProps('transactions')} />
        <Tab label="Pending" value="pending" {...a11yProps('pending')} />
      </Tabs>
      <TabPanel value={value} index="transactions">
        {
          cardTransactions.data && (
            <>
              <Box mb={2}>
                <Typography variant="h4">{cardId} Transactions</Typography>
              </Box>
              {renderTable(cardTransactions.data)}
            </>
          )
        }
      </TabPanel>
      <TabPanel value={value} index="pending">
        {
          cardTransactionsPending.data && (
            <>
              <Box mb={2}>
                <Typography variant="h4">{cardId} Pending Transactions</Typography>
              </Box>
              {renderTable(cardTransactionsPending.data)}
            </>
          )
        }

      </TabPanel>
    </Box>
  );
};

export default CardDetail;

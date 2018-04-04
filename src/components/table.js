import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// with es6
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const purchaseTypes = [ 'Food', 'Clothing', 'Bills', 'Miscellaneous' ];
const money = [];
const cellEditProp = {
  mode: 'click',
  blurToSave: true
};
const selectRow = {
      mode: 'checkbox'
    };

export default class Table extends React.Component {
  render() {
    return (
      <BootstrapTable data={ money } cellEdit={ cellEditProp } insertRow={ true } deleteRow={ true } selectRow={ selectRow }>
        <TableHeaderColumn dataField='id' isKey={ true }>Entry Id</TableHeaderColumn>
        <TableHeaderColumn dataField='name' editable={ { type: 'textarea' } }>Item Name</TableHeaderColumn>
        <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: purchaseTypes } } }>Item Type</TableHeaderColumn>
        <TableHeaderColumn dataField='active' editable={ { type: 'textarea'} }>Amount Paid</TableHeaderColumn>
        <TableHeaderColumn dataField='date' editable={ { type: 'date' } }>Date Purchased</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

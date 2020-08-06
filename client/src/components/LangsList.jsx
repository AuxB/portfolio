import * as React from 'react';
import {
  List, Datagrid, TextField,
} from 'react-admin';

function LangsList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="language_name" />
      </Datagrid>
    </List>
  );
}

export default LangsList;

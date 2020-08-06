import * as React from 'react';
import {
  List, Datagrid, TextField, ReferenceField,
} from 'react-admin';

function LangsList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <ReferenceField source="id" reference="languages">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
}

export default LangsList;

import * as React from "react";
import { List, Datagrid, TextField, UrlField, EditButton } from 'react-admin';

function WorkList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <UrlField source="url" />
        <UrlField source="urlGit" />
        <TextField source="thumb" />
        <TextField source="languages" />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export default WorkList;

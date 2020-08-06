import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  List, Datagrid, TextField, TextInput, Create, SimpleForm, SimpleList, Edit, UrlField, EditButton,
} from 'react-admin';

export function WorkList(props) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.description}
          tertiaryText={(record) => record.url}
        />
      )
        : (
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
        )}
    </List>
  );
}

export function WorkEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="url" />
        <TextInput source="urlGit" />
        <TextInput source="thumb" />
        <TextInput source="languages" />
      </SimpleForm>
    </Edit>
  );
}

export function WorkCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="url" />
        <TextInput source="urlGit" />
        <TextInput source="thumb" />
        <TextInput source="language_1" />
        <TextInput source="language_2" />
        <TextInput source="language_3" />
      </SimpleForm>
    </Create>
  );
}

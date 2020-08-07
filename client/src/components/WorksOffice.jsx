import * as React from 'react';
import { useMediaQuery, TextareaAutosize } from '@material-ui/core';
import {
  List, Datagrid, TextField, TextInput, Create, SimpleForm,
  SimpleList, Edit, UrlField, EditButton, ImageInput, ImageField,
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
        <ImageInput source="thumb" label="Related pictures" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="languages" />
      </SimpleForm>
    </Edit>
  );
}

export function WorkCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" required />
        <TextInput multiline source="description" required/>
        <TextInput source="url" />
        <TextInput source="urlGit" required/>
        <TextInput source="thumb" required/>
        <TextInput source="language_1" required/>
        <TextInput source="language_2" />
        <TextInput source="language_3" />
      </SimpleForm>
    </Create>
  );
}

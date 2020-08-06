import * as React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import WorkList from './WorkList';
import LangsList from './LangsList';

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);
function BackOffice() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="languages" list={LangsList} />
      <Resource name="works" list={WorkList} edit={EditGuesser} />
    </Admin>
  );
}

export default BackOffice;

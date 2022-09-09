import { FC, useEffect } from 'react'
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, CustomRoutes, useStoreContext, useStore } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css'
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './components/Dashboard';
import AuthProvider from './components/AuthProvider';
import PostEdit from './components/posts/PostEdit';
import PostCreate from './components/posts/PostCreate';
import PostList from './components/posts/PostList';
import UsersList from './components/users/UsersList';
import PostShow from './components/posts/PostShow';
import UsersEdit from './components/users/UsersEdit';
import { Route } from 'react-router-dom';
import Settings from './components/pages/Settings';

/* 
https://marmelab.com/react-admin/Fields.html
*/

const App: FC = () => {

  const dataProvider = jsonServerProvider('http://127.0.0.1:65432');

  // useEffect(() => {
    
  //   const listOfEmail = async () => {
  //     const response = dataProvider.getMany("users", { ids: [] }).then((res) => {
  //       return res?.data;
  //     })
  //     console.log(await response)
  //   }
  //   listOfEmail();
    
  // }, [dataProvider])

  return (
    <Admin authProvider={AuthProvider} dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UsersList} edit={UsersEdit} recordRepresentation="name" icon={UserIcon} />

    </Admin>
  )
}

export default App

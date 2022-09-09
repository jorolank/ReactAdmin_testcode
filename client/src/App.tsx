import { FC } from 'react'
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
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

/* 
https://marmelab.com/react-admin/Fields.html
*/

const App: FC = () => {
  const dataProvider = jsonServerProvider('http://127.0.0.1:65432');
  return (
    <Admin authProvider={AuthProvider} dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UsersList} edit={EditGuesser} recordRepresentation="name" icon={UserIcon} />
    </Admin>
  )
}

export default App

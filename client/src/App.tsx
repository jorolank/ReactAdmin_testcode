import { FC } from 'react'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css'
import PostList from './components/PostList';
import UserList from './components/UserList';
import PostEdit from './components/PostEdit';
import PostCreate from './components/PostCreate';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './components/Dashboard';
import AuthProvider from './components/AuthProvider';

/* 
 youtube url: https://www.youtube.com/watch?v=HRmdj-HpJyE
 youtube channel: traversy media
*/

const App: FC = () => {
  const dataProvider = jsonServerProvider('http://127.0.0.1:5000');
  return (
    <Admin authProvider={AuthProvider} dataProvider={dataProvider} dashboard={Dashboard}>
        {/* <Resource name="posts" list={ListGuesser} /> */}
        {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />
    </Admin>
  )
}

export default App

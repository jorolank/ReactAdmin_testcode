import { FC } from 'react'
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css'
import UserList from './components/users/UsersList';
import PostCreate from './components/posts/PostCreate';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './components/Dashboard';
import AuthProvider from './components/AuthProvider';
import PostList from './components/posts/PostList';
import PostEdit from './components/posts/PostEdit';

/* 
 youtube url: https://www.youtube.com/watch?v=HRmdj-HpJyE
 youtube channel: traversy media
*/

const App: FC = () => {
  const dataProvider = jsonServerProvider('http://127.0.0.1:5000');
  return (
    <Admin authProvider={AuthProvider} dataProvider={dataProvider} dashboard={Dashboard}>
        {/* <Resource name="posts" list={ListGuesser} /> 
        <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} edit={EditGuesser}  recordRepresentation="name" icon={UserIcon} />
    </Admin>
  )
}

export default App

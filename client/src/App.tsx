import { FC } from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/PostList'
import './App.css'
/* 
 youtube url: https://www.youtube.com/watch?v=HRmdj-HpJyE
 youtube channel: traversy media
*/

const App: FC = () => {
  const dataProvider = jsonServerProvider('http://127.0.0.1:5000');
  return (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
    </Admin>
  )
}

export default App

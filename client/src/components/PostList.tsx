import {FC} from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

const PostList: FC = (props: any) =>{
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='title'/>
                <TextField source='publishedAt'/>
                <EditButton {...props} basePath='/posts' />
                <DeleteButton {...props} basePath='/posts' />
            </Datagrid>
        </List>
    )
}

export default PostList;
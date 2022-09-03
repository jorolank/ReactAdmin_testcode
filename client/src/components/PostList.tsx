import {FC} from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton, useRecordContext, ReferenceField} from 'react-admin'

const MyUrlField = ({source}:any) =>{
    const record = useRecordContext();
    return record ? (<a href={`/user/${record.id}`}>{record.status.toString()}</a>) : null
}

const PostList: FC = (props: any) => {
    return (
        <List {...props}>
            <Datagrid rowClick={"edit"}>
                <ReferenceField source="usersId" reference="users" />
                <TextField source='id'/>
                <TextField source='title'/>
                <TextField source='publishedAt'/>
                <MyUrlField soruce='status'   />
                <DeleteButton {...props}  />
            </Datagrid>
        </List>
    )
}

export default PostList;
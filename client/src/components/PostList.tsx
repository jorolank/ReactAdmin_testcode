import {FC} from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton, useRecordContext, ReferenceField, TextInput, ReferenceInput} from 'react-admin'

const MyUrlField = ({source}:any) =>{
    const record = useRecordContext();
    return record ? (<>{record.status.toString()}</>) : null
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];


const PostList: FC = (props: any) => {
    return (
        <List 
             filters={postFilters}   
            hasCreate
          {...props}>
            <Datagrid >
                <ReferenceField source="userId" reference="users">
                     <TextField source="id" />
                </ReferenceField>
                {/* <TextField source='id'/> */}
                <TextField source='title'/>
                <TextField source='body'/>
                <TextField source='publishedAt'/>
                <MyUrlField soruce='status'   />
                <EditButton {...props}  />
                <DeleteButton {...props}  />
            </Datagrid>
        </List>
    )
}

export default PostList;
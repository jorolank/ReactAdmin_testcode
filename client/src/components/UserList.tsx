import { FC } from "react";
import { Datagrid, EditButton, List, TextField } from "react-admin";


const UserList:FC = (props: any) =>{
    return (
        <List {...props}>
            <Datagrid>
                  <TextField source='id'/>
                  <TextField source='name'/>
                  <TextField source='email'/>
                  <EditButton {...props}  />
            </Datagrid>
        </List>
    )
}

export default UserList;
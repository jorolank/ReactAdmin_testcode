import { FC } from "react";
import { Datagrid, EditButton, List, TextField } from "react-admin";


const UserList:FC = () =>{
    return (
        <List >
            <Datagrid>
                  <TextField source='id'/>
                  <TextField source='name'/>
                  <TextField source='email'/>
                  <EditButton   />
            </Datagrid>
        </List>
    )
}

export default UserList;
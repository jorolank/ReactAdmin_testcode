import { FC } from "react"
import { Datagrid, DeleteButton, DeleteWithConfirmButton, EditButton, List, TextField, useGetList } from "react-admin"


const UsersList: FC = () =>{
    
    return (
        <List >
            <Datagrid>
                  <TextField source='id'/>
                  <TextField source='name'/>
                  <TextField source='email'/>
                  <EditButton />
                  <DeleteWithConfirmButton />
            </Datagrid>
        </List>
    )
}
export default UsersList
import { FC } from "react"
import {  BooleanInput, Create, Edit, ReferenceInput, SimpleForm, TextField, TextInput } from "react-admin"


const PostCreate:FC = (props : any) =>{
    return (
        <Create {...props} redirect="list">
            <SimpleForm >
                <ReferenceInput source="userId" reference="users" />
                <TextInput source="title" /> 
                <TextInput multiline source="body" /> 
                <BooleanInput source="status" />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate
import { FC } from "react"
import {  BooleanInput, Create, DateInput, ReferenceInput, SimpleForm, TextField, TextInput } from "react-admin"


const PostCreate:FC = () =>{
  
    return (
        <Create  redirect="list">
            <SimpleForm >
                <ReferenceInput source="userId" reference="users" />
                <TextInput source="title" /> 
                <TextInput multiline source="body" /> 
                <DateInput source="published_at" />
                <BooleanInput source="subscription" disabled checked={false} defaultValue={true} />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate
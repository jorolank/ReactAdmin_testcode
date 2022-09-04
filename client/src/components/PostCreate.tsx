import { FC } from "react"
import {  BooleanInput, Create, DateInput, Edit, ReferenceInput, SimpleForm, TextField, TextInput } from "react-admin"


const PostCreate:FC = () =>{
  
    return (
        <Create  redirect="list">
            <SimpleForm >
                <ReferenceInput source="userId" reference="users" />
                <TextInput source="title" /> 
                <TextInput multiline source="body" /> 
                <DateInput source="publishedAt" />
                <BooleanInput source="like" defaultValue={true} />
                <BooleanInput source="dislike" />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate
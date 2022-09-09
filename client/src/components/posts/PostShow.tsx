import { Button } from '@mui/material';
import React from 'react'
import { useGetOne, TextField, Show, SimpleShowLayout, useRecordContext, TopToolbar, EditButton } from 'react-admin';

const PostTitle = () =>{
    const record=  useRecordContext();
    // console.log(record)
    return (
        <span>
            POST ID: {record?.id}
        </span>
    )
}

const PostShowActions = () =>{
    const customAction = () =>{
        alert(0)
    }
    return (<TopToolbar>
        <EditButton />
        <Button variant='contained' onClick={customAction}>Custom Action</Button>
        <p>lorem ipsum</p>
    </TopToolbar> )
}

const PostShow = () => {

  return (
    <Show title={<PostTitle />} actions={<PostShowActions />}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <TextField source="published_at" />
        </SimpleShowLayout>
    </Show>
  )
}

export default PostShow
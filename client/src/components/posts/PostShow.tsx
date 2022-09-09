import React from 'react'
import { useGetOne, TextField, Show, SimpleShowLayout, useRecordContext } from 'react-admin';

const PostTitle = () =>{
    const record=  useRecordContext();
    // console.log(record)
    return (
        <span>
            POST ID: {record?.id}
        </span>
    )
}

const PostShow = () => {

  return (
    <Show title={<PostTitle />}>
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
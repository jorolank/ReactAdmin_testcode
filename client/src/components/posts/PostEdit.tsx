import React, { FC, useEffect, useState } from "react";
import {
  BooleanInput,
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";
import { useParams } from "react-router-dom";
const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const PostEdit: FC = () => {
  // const { id } = useParams();
  // const { data, isLoading} = useGetOne("posts", { id });
  // const [state, setState] = useState<boolean>(false);

  
  return (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" resettable />
        <TextInput multiline source="body" resettable />
        <DateInput source="published_at" />

        <BooleanInput source="subscription" disabled />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;

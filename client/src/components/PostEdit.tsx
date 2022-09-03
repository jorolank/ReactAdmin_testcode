import { FC } from "react";
import {
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";

const PostTitle = () =>{
    const record = useRecordContext();
    console.log(record)
    return <span>Post {record ? `"${record.title}"` : ''}</span>
}

const PostEdit: FC = (props: any) => {
  return (
    <Edit {...props} title={<PostTitle />}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;

import { FC } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  useRecordContext,
  ReferenceField,
  TextInput,
  ReferenceInput,
  Button,
  useUpdate,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

const LikeField = ({ source }: any) => {
  const record = useRecordContext();
  const likeObj = {
    like:  !record.like,
    dislike: record.like,
    id: record.id,
    userId: record.userId,
    title: record.title,
    body: record.body,
    publishedAt: record.publishedAt
  };

  const [update, { isLoading }] = useUpdate("posts", {
    id: record.id,
    data: likeObj,
    previousData: record
  });

  const handleClick = () => {

    update();
  };

  return record ? (
    <Button variant="contained" color="secondary" onClick={handleClick} disabled={isLoading}>
        {record.like?.toString()}
    </Button>
  ) : null
};

interface recordType{
  dislike: boolean | JSX.Element
  like:  boolean  | JSX.Element
  id: string
  userId: string
  title: string
  body: string
  publishedAt: string
}

const DislikeField = ({ source }: any) => {
  const record: recordType = useRecordContext();

  const dislikeObj = {
    dislike: !record.dislike,
    like:  record.dislike,
    id: record.id,
    userId: record.userId,
    title: record.title,
    body: record.body,
    publishedAt: record.publishedAt
  }

  const [update, { isLoading }] = useUpdate("posts", {
    id: record.id,
    data: dislikeObj,
    previousData: record
  });

  const handleClick = () => {
    update();
  };

  return record ? (
      //@ts-ignore
    <Button variant="contained" color="secondary" onClick={handleClick} disabled={isLoading}>
           //@ts-ignore
        {
           (record.dislike) ? true : false
        } 
    </Button>
  ) : null
};

const CustomEditButton = ({ source }: any) => {
  const record = useRecordContext();
  return record ? (
    <EditButton  />
  ) : null;
};

const PostList: FC = () => {
  return (
    <List  filters={postFilters} hasCreate>
      <Datagrid>
        <ReferenceField source="userId" reference="users">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <TextField source="publishedAt" />

        <LikeField source="like" label="subscription" />
      

        <CustomEditButton   />
        <DeleteButton  />
      </Datagrid>
    </List>
  );
};

export default PostList;

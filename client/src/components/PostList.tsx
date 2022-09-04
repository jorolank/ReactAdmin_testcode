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

const SubscriptionBtnField = ({ source }: any) => {
  const record = useRecordContext();
  const likeObj = {
    like:  !record.like,
    dislike: record.dislike,
    id: record.id,
    userId: record.userId,
    title: record.title,
    body: record.body,
    publishedAt: record.publishedAt
  };
  const dislikeObj = {
    like:  record.like,
    dislike: !record.dislike,
    id: record.id,
    userId: record.userId,
    title: record.title,
    body: record.body,
    publishedAt: record.publishedAt
  }
  const [update, { isLoading }] = useUpdate("posts", {
    id: record.id,
    data: source === "like" ? likeObj : dislikeObj,
    previousData: record,
  });
  const handleClick = () => {
    update("posts");
  };
  return record ? (
    <Button variant="contained" onClick={handleClick} disabled={isLoading}>
        {  source === "like" ? record.like.toString() : record.dislike.toString()}
    </Button>
  ) : null;
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

        <SubscriptionBtnField source="like" label="Subscription" />
        {/* <SubscriptionBtnField source="dislike" /> */}

        <CustomEditButton   />
        <DeleteButton  />
      </Datagrid>
    </List>
  );
};

export default PostList;

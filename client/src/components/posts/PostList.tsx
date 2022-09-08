import { FC } from "react";
import { TextInput, ReferenceInput } from 'react-admin';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  useRecordContext,
  ReferenceField,
  Button,
  useUpdate,
  DateInput,
  DateField,
  DeleteWithConfirmButton,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
  // <DateInput source="published_at" label={"Published"} alwaysOn />,
  <DateInput source={`published_at_gte`} alwaysOn />,
  <DateInput source={`published_at_lte`} alwaysOn />,
];

const SubscriptionField = ({ label }: { label: string }) => {
  const record = useRecordContext();
  const props = {
    subscription: !record.subscription,
    id: record.id,
    userId: record.userId,
    title: record.title,
    body: record.body,
    publishedAt: record.published_at
  };

  const [update, { isLoading }] = useUpdate("posts", {
    id: record.id,
    data: props,
    previousData: record,
  });

  const handleClick = () => {
    update();
  };

  return record ? (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleClick}
      disabled={isLoading}
    >
      {record.subscription?.toString()}
    </Button>
  ) : null;
};



const PostList: FC = () => {
  return (
    <List
      filters={postFilters}
      emptyWhileLoading
      sort={{ field: "published_at", order: "DESC" }}
      hasCreate
    >
      <Datagrid>
        <ReferenceField source="userId" reference="users">
          <TextField source="id" />
        </ReferenceField>
        {/* <TextField source="id" /> */}
        <TextField source="title" />
        <TextField source="body" />
        <DateField locales={"af"} source="published_at" showTime={false} />

        <SubscriptionField label="subscription" />

        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};

export default PostList;

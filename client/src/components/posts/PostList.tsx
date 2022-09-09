import { FC } from "react";
import { TextInput, ReferenceInput, ShowButton, useGetOne, WrapperField, FunctionField } from 'react-admin';
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
    published_at: record.published_at
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



const PostList: FC = ({id}: any) => {
  
  return (
    <List
      filters={postFilters}
      emptyWhileLoading
      sort={{ field: "published_at", order: "DESC" }}
      hasCreate
    >
      <Datagrid>
        <ReferenceField source="userId" reference="users"  textAlign="center" sortable={true} sortBy="posts.userId">
          <TextField source="id"  />
        </ReferenceField>
        {/* <TextField source="id" /> */}
        <TextField source="title" />
        <TextField source="body" />
        <DateField locales={"af"} source="published_at" showTime={false} />

        <SubscriptionField label="subscription" />

        {/* combine two or more different column */}
        {/* <WrapperField label="actions">
          <EditButton />
          <ShowButton   />
          <DeleteWithConfirmButton />
        </WrapperField> */}

        {/* <FunctionField label="Test" render={
           ()=> (
            <>
              <EditButton />
              <ShowButton   />
              <DeleteWithConfirmButton />
            </>
          )
        } /> */}

        <>
              <EditButton variant="outlined" />
              <ShowButton variant="outlined"   />
              <DeleteWithConfirmButton variant="outlined" />
        </>
        
      </Datagrid>
    </List>
  );
};

export default PostList;

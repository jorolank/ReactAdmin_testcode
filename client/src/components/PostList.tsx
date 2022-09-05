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
  DateInput,
  DateField,
} from "react-admin";


const postFilters = [
  // <TextInput source="q" label="Search" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users" />,
  <DateInput source="published_at" label={'Published'} alwaysOn/>,
  <DateInput source={`published_at_gte`}  alwaysOn/>,
  <DateInput source={`published_at_lte`}  alwaysOn/>
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


const CustomEditButton = ({ source }: any) => {
  const record = useRecordContext();
  return record ? (
    <EditButton  />
  ) : null;
};


const PostList: FC = () => {
  return (
    <List  filters={postFilters} 
    sort={{field: 'publishedAt', order: 'DESC'}}
    hasCreate>
      <Datagrid>
        <ReferenceField source="userId" reference="users">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <DateField locales={'af'}  source="published_at" showTime={false} />

        <LikeField source="like" label="subscription" />
      

        <CustomEditButton   />
        <DeleteButton  />
      </Datagrid>
    </List>
  );
};

export default PostList;

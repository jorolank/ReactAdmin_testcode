import { Edit, SimpleForm, TextInput } from 'react-admin';

const UsersEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source='id' disabled/>
                <TextInput source='name'/>
                <TextInput source='email'/>
            </SimpleForm>
        </Edit>
    )
}

export default UsersEdit;
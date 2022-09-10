import { Button } from '@mui/material';
import { Edit, SimpleForm, TextInput, TopToolbar, ShowButton, ListButton, email, minLength, required, maxLength, useRecordContext, useGetOne, useNotify } from 'react-admin';
import { useSelector } from 'react-redux';
import { getUsers } from '../../feature/users/usersSlice';
import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';



const UsersEdit = () => {

 
    const listOfUsers: any = useSelector(getUsers);
    const {id} = useParams();

    // const notify = useNotify();
    // const { data: currentUser, isLoading, error, refetch } = useGetOne("users",{ id: params.id });
   
    const emailIsExist = (value: any) =>{

        if(!value){
            return 'The email is required';
        }
        const isExist = listOfUsers.users.some((user: any)=>{
            return user.email === value && user.id !== Number(id)
        })

        if(isExist){
            return value+' is already exist'
        }
    }
    
    const validateName = [required(), maxLength(15), minLength(3)];
    const validateEmail = [emailIsExist]

    return (
        <Edit>
            <SimpleForm>
                <TextInput source='id' disabled/>
                <TextInput source='name' validate={validateName} />
                <TextInput source='email' validate={validateEmail}  />
            </SimpleForm>
        </Edit>
    )
}

export default UsersEdit;
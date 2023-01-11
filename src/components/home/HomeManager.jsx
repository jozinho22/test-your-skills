import React from 'react';
import CustomSpinner from '../general-content/CustomSpinner';

const HomeManager = ({isLoading, children}) => {

    return (
            isLoading ?
                <CustomSpinner />  :  
                    children
            );
}
 
export default HomeManager;
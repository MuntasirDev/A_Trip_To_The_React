import React, { useContext } from 'react';
import { AssetsContext } from './FamilyTree';

const Special = ({name,asset}) => {


    const newAsset = useContext(AssetsContext);

    return (
        <div>
            <h3>Speical: {name}</h3>
            <p> Asset: {asset}</p>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Special;
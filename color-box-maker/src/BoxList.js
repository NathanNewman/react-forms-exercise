import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
    const [boxes, updateBoxes] = useState([]);
    return (
        <div>
            <NewBoxForm />
            <div>
                {boxes.map(box => <Box key={box.id} props={box} />)}
            </div>
        </div>
    );
}
import React from 'react';

const Box = (props) => {
    const height = props.height;
    const width = props.width;
    const color = props.color;
    return (
        <div style={{ height: height, width: width, backgroundColor: color }} />
    );
}

export default Box;
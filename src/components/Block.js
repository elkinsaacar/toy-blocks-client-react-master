import React from 'react'

const Block = (nodeBlocks) => {

    const blocks = nodeBlocks.nodeBlocks;
    {/* console.log("*****blocks*****");
    console.log(blocks);
    console.log("*****blocks*****"); */}

    const stylesDiv1 = {
        backgroundColor: '#cccccc',
        borderRadius: '3px', 
        width: '95%',
        padding: '10px', margin: '5px'
    };

    const stylesDiv2 = { color: '#0000ff' };

    const stylesDiv3 = { color: '#000000' };

    const stylesDiv4 = { width: '100%' };

    return (
        <div style={stylesDiv4}>
            {
                blocks.map(item =>(
                    <div id={`${item.id}.${item.attributes.timestamp}`}  style={stylesDiv1} >
                        <div style={stylesDiv2} > <b>00{item.id}</b> </div>
                        <div style={stylesDiv3} > {item.attributes.data} </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Block

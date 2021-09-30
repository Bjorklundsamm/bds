import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`

`
 
function TableEntry(props) {
    return (
        <Styles>
            <tr className="table-row">
                {props.entries.map((entry) => (
                    <td className="table-entry table-text non-text">{entry}</td>
                ))}
            </tr>
        </Styles>
    )
}

export default TableEntry;

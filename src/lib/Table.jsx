import React from 'react';
import styled from 'styled-components';

import TableEntry from './TableEntry';


const Styles = styled.div`
    .table-main {
        margin-top: 12px;
        margin-bottom: 12px;
        align-content: center;
    }

    .table-row{
        padding: 5px;
        margin: 5px;
    }

    .table-entry{
        width: 272px;
        border-bottom: 2px solid rgba(255,255,255, .2);
        margin-left: 5px;
        align-items: center;
    }

    .table-text {
        font-family: 'Staatliches', cursive;
        color: rgba(255,255,255, 1);
        font-size: 24px;
    }
`
 
function Table(props) {
    return (
        <Styles>
            <table className="table-main">
                {props.entries.map((set) => (
                    <TableEntry entries={set} />
                ))}
            </table>
        </Styles>
    )
}

export default Table;

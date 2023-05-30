import PropTypes from 'prop-types';

import ViewCasoBtn from './actionButtons/viewCasoBtn.jsx';
import TglRetiroBtn from './actionButtons/tglRetiroBtn.jsx';


export default function BotonesCab({row}) {
    let botones = [];

    botones.push(<TglRetiroBtn key="TglRetiroBtn" row={row}/>);
    if (row.original.items.length == 2)
        botones.push(<ViewCasoBtn key="viewCasoBtn" row={row}/>)

    return (
        <>
            {botones}
        </>
    )
}


 BotonesCab.propTypes = {
    row: PropTypes.object.isRequired
};
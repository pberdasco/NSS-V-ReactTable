import PropTypes from 'prop-types';

import ViewCasoBtn from './viewCasoBtn.jsx';
import TglRetiroBtn from './tglRetiroBtn.jsx';


export default function BotonesCab({row}) {
    let botones = [];

    botones.push(<ViewCasoBtn key="viewCasoBtn" row={row}/>)
    if (row.original.items.length == 2)
        botones.push(<TglRetiroBtn key="TglRetiroBtn" row={row}/>);

    return (
        <>
            {botones}
        </>
    )
}


 BotonesCab.propTypes = {
    row: PropTypes.object.isRequired
};
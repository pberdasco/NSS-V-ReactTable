import PropTypes from 'prop-types';

import ViewItemBtn from './detActionButtons/viewItemBtn.jsx';
import RevisionBtn from './detActionButtons/revisionBtn.jsx';


export default function BotonesDet({row}) {
    let botones = [];
const item = row.original;
console.log(item );
    botones.push(<ViewItemBtn key="tglRetiroBtn" row={row}/>);
    if (item.estadoID === 1)
        botones.push(<RevisionBtn key="revisionBtn" row={row}/>);


    return (
        <>
            {botones}
        </>
    )
}


 BotonesDet.propTypes = {
    row: PropTypes.object.isRequired
};
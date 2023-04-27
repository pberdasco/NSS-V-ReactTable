import { PropTypes } from "prop-types";

export default function Main(props){
    return <main>
        <div>
            {props.content}
        </div>
    </main>
}

Main.propTypes = {
    content: PropTypes.node.isRequired
};
import "../css/ShapeDivider.css"

function ShapeDivider(props) {
    return (
        <>
            {props.one && <div className="shapedivider1"></div>}
        </>
    )
}

export default ShapeDivider
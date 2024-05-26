import Country from "../atoms/Country"
import Label from "../atoms/Label"

function Field2(props){
    return (
        <div>
            <div>
                <Label text={props.text}></Label>
            </div>
            <div>
                <Country type={props.type} placeholder={props.placeholder} val={props.val} fnVal={props.fnVal}></Country>
            </div>
        </div>
    )
}

export default Field2
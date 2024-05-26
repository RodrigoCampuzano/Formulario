import Label from "../atoms/Label"
import Input from "../atoms/Input"

function Field(props){
    return (
        <div>
            <div>
                <Label text={props.text}></Label>
            </div>
            <div>
                <Input type={props.type} placeholder={props.placeholder} val={props.val} fnVal={props.fnVal}></Input>
            </div>
        </div>
    )
}

export default Field
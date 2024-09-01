import * as React from "react";
import { PermissionConsumer } from "../PermissionContext";

interface ISecondButtonProps {
    className?: string;
}

const SecondButton: React.FC<ISecondButtonProps> = (props) => (
    <PermissionConsumer name="second" >
        <div className={`container mt-3 ${props.className || ''}`}>
            <button className="btn">Second</button>
        </div>
    </PermissionConsumer>
)

export default SecondButton;
import * as React from "react";
import { PermissionConsumer } from "../PermissionContext";

interface IFourtsButtonProps {
    className?: string;
}

const FourthButton: React.FC<IFourtsButtonProps> = (props) => (
    <PermissionConsumer name="fourth">
        <div className={`container mt-3 ${props.className || ''}`}>
            <button className="btn">Fourth</button>
        </div>
    </PermissionConsumer>
)

export default FourthButton;
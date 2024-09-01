import * as React from "react";
import { PermissionConsumer } from "../PermissionContext";

interface IFirstButtonProps {
    className?: string;
}

const FirstButton: React.FC<IFirstButtonProps> = (props) => (
    <PermissionConsumer name="first">
        <div className={`container mt-3 ${props.className || ''}`}>
            <button className="btn">First</button>
        </div>
    </PermissionConsumer>

)

export default FirstButton;
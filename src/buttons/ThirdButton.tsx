import * as React from "react";
import { PermissionConsumer } from "../PermissionContext";

interface IThirdButtonProps {
    className?: string;
}

const ThirdButton: React.FC<IThirdButtonProps> = (props) => (
    <PermissionConsumer name="third">
        <div className={`container mt-3 ${props.className || ''}`}>
            <button className="btn">Third</button>
        </div>
    </PermissionConsumer>
)

export default ThirdButton;
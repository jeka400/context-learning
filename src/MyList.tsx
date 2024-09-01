import * as React from "react";

interface IMyListProps {
    items: [];
}

const MyList: React.FC<IMyListProps> = ({ items }) => (
    <ul className="list-group">
        { items.map((i) => (
            <li key={ i } className="list-group-item">
                { i }
            </li>
        ))}
    </ul>
)

export default MyList;
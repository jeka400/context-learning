import * as React from "react";
import MyList from "./MyList";

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["First", "Second", "Third"]);
        }, 4000);
    })
}

class ListContainer extends React.Component {
    state: any = { items: [] };

    componentDidMount(): void {
        fetchData().then((items) => this.setState({ items }));
    }

    render() {
        return (
            <MyList {...this.state} />
        )
    }
}

export default ListContainer;
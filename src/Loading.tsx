import * as React from "react";

interface ILoadingState {
  first: string;
  second: string;
  third: string;
  fourth: string;
  doneMessage: string;
}
  
class Loading extends React.Component<{}, ILoadingState> {
  state: ILoadingState = { 
      first: "loading...",
      second: "loading..",
      third: "loading.",
      fourth: "still loading",
      doneMessage: "finished!"
  }

  constructor(props: {}) {
    super(props);

    setTimeout(() => { this.setState({first: "done!"}) }, 1000);
    setTimeout(() => { this.setState({second: "done!"}) }, 2000);
    setTimeout(() => { this.setState({third: "done!"}) }, 3000);
    setTimeout(() => { this.setState((state) => ({
        ...this.state,
        fourth: this.state.doneMessage,
      }))
    }, 4000);
  }
  
  render() {
    return (
      <ul className="list-group">
        { Object.keys(this.state)
          .filter((key) => key !== "doneMessage")
          .map((key) => (
            <li key={key} className="list-group-item">
              <strong>{key}: </strong> {this.state[key as keyof ILoadingState]}
            </li>
          ))}
      </ul>
    )
  }
}

export default Loading;
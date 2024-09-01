import * as React from "react";

interface IPermissionProviderState {
    first: boolean;
    second: boolean;
    third: boolean;
    fourth: boolean;
    fifth: boolean;
}

interface IPermissionProviderProps {
    children: React.ReactNode;
}

const { Provider,Consumer } = React.createContext<IPermissionProviderState | undefined>(undefined);

class PermissionProvider extends React.Component<IPermissionProviderProps, IPermissionProviderState> {
    state: IPermissionProviderState = {
        first: true,
        second: false,
        third: true,
        fourth: true,
        fifth: false,
    };

    render() {
        return <Provider value={ this.state }>{ this.props.children }</Provider>
    }
}

interface IPermissionConsumerProps {
    children: React.ReactNode;
    name: keyof IPermissionProviderState;
}

const PermissionConsumer: React.FC<IPermissionConsumerProps> = ({ name, children }) => (
    <Consumer> 
        {(value) => (value && value[name] ? children : null)} 
    </Consumer>
) 

export { PermissionProvider, PermissionConsumer };
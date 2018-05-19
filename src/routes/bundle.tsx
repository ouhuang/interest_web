import * as React from 'react';

export default (fun: any) => {
    class Bundle extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            this.state = { C: null };
        }
        async componentDidMount() {
            this.setState({ C: await fun().then((v: any) => v.default) })
        }

        render() {
            const { C } = this.state;
            const props = this.props;
            return C ? <C {...props} /> : null;
        }
    }
    return Bundle
};




import { Component, ReactNode } from "react";
import { toast } from "materialize-css";
import Error from "./Error";
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error: Error) {
    this.setState({
      hasError: true,
    });
    toast({ html: `Error message: ${error.message}` });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <Error />
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

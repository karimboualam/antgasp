import React from "react";

type State = { hasError: boolean; error?: Error };
export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
  componentDidCatch(error: Error, info: any) { console.error("UI Error", error, info); }
  render() {
    if (this.state.hasError)
      return <div style={{ padding: 24 }}>
        <h1>Oups, une erreur est survenue.</h1>
        <pre>{this.state.error?.message}</pre>
      </div>;
    return this.props.children;
  }
}

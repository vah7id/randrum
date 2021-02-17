import React from 'react';
import './App.css';
import { APP_STATUS } from './modules/shared/enums';
import { AppInterface } from './modules/shared/types';
import PlayAction from './modules/actions/play';

type AppState = {
  status: string;
}

type MyProps = {
  status: string;
}

class App extends React.Component<MyProps, AppState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      status: this.props.status || APP_STATUS.INIT
    }
    this.setStatus = this.setStatus.bind(this);
  }
  setStatus(newFlag: string) {
    this.setState({ status: newFlag });
  }
  render() {
    console.log(this.state.status)
    return (<div><PlayAction setStatus={this.setStatus} status={this.state.status} /> {this.state.status}</div>)
  }
}

export default App;

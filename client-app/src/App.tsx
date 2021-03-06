import React from 'react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

import './App.css';

class App extends React.Component {
  state = {
    values: [],
  };

  async componentDidMount() {
    const response = await axios('http://localhost:5000/api/values');

    this.setState({ values: response.data });
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;

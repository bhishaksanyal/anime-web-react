import {Header, Container, Statistic, Segment, Grid} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>

      {/* Top Header */}
      <Header as='h1' attached>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>$2533.33</Statistic.Value>
      </Statistic>

      {/* Table Display */}
      <Segment textAlign='center' raised>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label>Incoming</Statistic.Label>
                <Statistic.Value>$1023.22</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label>Expenses</Statistic.Label>
                <Statistic.Value>$3322.22</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;

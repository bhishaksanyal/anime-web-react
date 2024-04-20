import {Header, Container, Statistic, Segment, Grid, Icon, Form, ButtonGroup, Button} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>

      {/* Top Header */}
      <Header as={'h3'} attached>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>$2533.33</Statistic.Value>
      </Statistic>

      {/* Balance Display */}
      <Segment textAlign='center' raised>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label>Income</Statistic.Label>
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

      {/* History or Transactions */}
      <Header as={'h3'}>History</Header>
      <Segment color='red' raised>
        <Grid columns={3} verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>
              Tojo spend on shopping
            </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              $200.00
            </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              <Icon name='edit outline' bordered></Icon>
              <Icon name='trash alternate outline' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green' raised>
        <Grid columns={3} verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>
              Tojo spend on shopping
            </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              $200.00
            </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              <Icon name='edit outline' bordered></Icon>
              <Icon name='trash alternate outline' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='blue' raised>
        <Grid columns={3} verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>
              Tojo spend on shopping
            </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              $200.00
            </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              <Icon name='edit outline' bordered></Icon>
              <Icon name='trash alternate outline' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* New transaction form */}
      <Header as={'h3'}></Header>
      <Form>
        <Form.Group grouped>
          <Form.Input
            icon='tags'
            width='10'
            label='Description'
            placeholder='New shinny thing'
          />
          <Form.Input
            icon='dollar'
            width='4'
            label='Value'
            iconPosition='left'
            placeholder='100.00'
          />
        </Form.Group>
        <ButtonGroup style={{marginLeft: '10px'}}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </ButtonGroup>
      </Form>

    </Container>
  );
}

export default App;

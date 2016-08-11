const formInstance = (
  <Form>
    <FormGroup controlId="formHorizontalEmail" horizontal>
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword" horizontal>
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup horizontal>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup horizontal>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

ReactDOM.render(formInstance, mountNode);

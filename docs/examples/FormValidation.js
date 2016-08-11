const formInstance = (
  <form>
    <FormGroup controlId="formValidationSuccess1" validationState="success">
      <ControlLabel>Input with success</ControlLabel>
      <FormControl type="text"/>
      <HelpBlock>Help text with validation state.</HelpBlock>
    </FormGroup>

    <FormGroup controlId="formValidationWarning1" validationState="warning">
      <ControlLabel>Input with warning</ControlLabel>
      <FormControl type="text"/>
    </FormGroup>

    <FormGroup controlId="formValidationError1" validationState="danger">
      <ControlLabel>Input with danger</ControlLabel>
      <FormControl type="text"/>
    </FormGroup>

    <FormGroup controlId="formValidationSuccess2" validationState="success">
      <ControlLabel>Input with success and feedback icon</ControlLabel>
      <FormControl type="text"/>

    </FormGroup>

    <FormGroup controlId="formValidationWarning2" validationState="warning">
      <ControlLabel>Input with warning and feedback icon</ControlLabel>
      <FormControl type="text"/>

    </FormGroup>

    <FormGroup controlId="formValidationError2" validationState="danger">
      <ControlLabel>Input with danger and feedback icon</ControlLabel>
      <FormControl type="text"/>

    </FormGroup>

    <FormGroup controlId="formValidationSuccess3" validationState="success">
      <ControlLabel>Input with success and custom feedback icon</ControlLabel>
      <FormControl type="text"/>
      <FormControl.Feedback>
        <Glyphicon glyph="music"/>
      </FormControl.Feedback>
    </FormGroup>

    <FormGroup controlId="formValidationWarning3" validationState="warning">
      <ControlLabel>Input group with warning</ControlLabel>
      <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text"/>
      </InputGroup>

    </FormGroup>

    <Form componentClass="fieldset">
      <FormGroup controlId="formValidationError3" validationState="danger" horizontal>
        <Col componentClass={ControlLabel} xs={3}>
          Input with danger
        </Col>
        <Col xs={9}>
          <FormControl type="text"/>

        </Col>
      </FormGroup>

      <FormGroup controlId="formValidationSuccess4" validationState="success" horizontal>
        <Col componentClass={ControlLabel} xs={3}>
          Input group with success
        </Col>
        <Col xs={9}>
          <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
            <FormControl type="text"/>
          </InputGroup>

        </Col>
      </FormGroup>
    </Form>

    <Form componentClass="fieldset" inline>
      <FormGroup controlId="formValidationWarning4" validationState="warning">
        <ControlLabel>Input with warning</ControlLabel>
        {' '}
        <FormControl type="text"/>

      </FormGroup>
      {' '}
      <FormGroup controlId="formValidationError4" validationState="danger">
        <ControlLabel>Input group with danger</ControlLabel>
        {' '}
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl type="text"/>
        </InputGroup>

      </FormGroup>
    </Form>

    <Checkbox validationState="success">
      Checkbox with success
    </Checkbox>
    <Radio validationState="warning">
      Radio with warning
    </Radio>
    <Checkbox validationState="danger">
      Checkbox with danger
    </Checkbox>

    {/* This requires React 15's <span>-less spaces to be exactly correct. */}
    <FormGroup validationState="success">
      <Checkbox inline>
        Checkbox
      </Checkbox>
      {' '}
      <Checkbox inline>
        with
      </Checkbox>
      {' '}
      <Checkbox inline>
        success
      </Checkbox>
    </FormGroup>
  </form>
);

ReactDOM.render(formInstance, mountNode);

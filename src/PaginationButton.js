import classNames from 'classnames';
import React from 'react';
import elementType from 'react-prop-types/lib/elementType';

import SafeAnchor from './SafeAnchor';
import createChainedFunction from './utils/createChainedFunction';

// TODO: This should be `<Pagination.Item>`.

// TODO: This should use `componentClass` like other components.

const propTypes = {
  componentClass: elementType,
  className: React.PropTypes.string,
  eventKey: React.PropTypes.any,
  onSelect: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  active: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

const defaultProps = {
  componentClass: SafeAnchor,
  active: false,
  disabled: false
};

class PaginationButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { disabled, onSelect, eventKey } = this.props;

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  }

  render() {
    const {
      componentClass: Component,
      active,
      disabled,
      onClick,
      className,
      style,
      ...props,
    } = this.props;

    if (Component === SafeAnchor) {
      // Assume that custom components want `eventKey`.
      delete props.eventKey;
    }

    props.className = classNames(props.className , 'page-link');

    delete props.onSelect;

    return (
      <li
        className={classNames(className, { active, disabled }, 'page-item')}
        style={style}
      >
        <Component
          {...props}
          disabled={disabled}
          onClick={createChainedFunction(onClick, this.handleClick)}
        />
      </li>
    );
  }
}

PaginationButton.propTypes = propTypes;
PaginationButton.defaultProps = defaultProps;

export default PaginationButton;

import React  from 'react';
import { Button } from 'antd';

class Counter extends React.Component {
  constructor(props) {
    super(props)

  }


    render () {
      const { value, onIncrement, onDecrement } = this.props;
      return(
        <div>
            <Button type="primary" onClick={ onIncrement} >+</Button>
            <span> { value }</span>
            <Button type="primary" onClick={ onDecrement}>-</Button>

        </div>
      )
    }
};
export default Counter;
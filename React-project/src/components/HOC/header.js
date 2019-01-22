import React from 'react';

export default  function WithHeader(wrapComponents)  {
  return class Hoc extends component {
    render() {
      return <div>这是一个敢接组件</div>
    }
  }
}
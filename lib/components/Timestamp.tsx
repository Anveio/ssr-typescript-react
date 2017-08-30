import * as React from 'react';

export interface Props {
  timestamp: Date;
}

class Timestamp extends React.PureComponent<Props, never> {
  public render() {
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString('en', {
          timeZone: 'America/New_York'
        })}
      </div>
    );
  }
}

export default Timestamp;

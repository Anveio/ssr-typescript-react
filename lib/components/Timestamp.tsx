import * as React from 'react';

export interface Props {
  timestamp: Date;
}

class Timestamp extends React.PureComponent<Props, never> {
  static timeDisplay = (timestamp: Date) =>
    timestamp.toLocaleTimeString('en', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/New_York'
    });

  shouldComponentUpdate(nextProps: Props) {
    const currentTimeDisplay = Timestamp.timeDisplay(this.props.timestamp);

    const nextTimeDisplay = Timestamp.timeDisplay(nextProps.timestamp);

    return currentTimeDisplay !== nextTimeDisplay;
  }

  componentWillUpdate() {
    console.log('Updating Timestamp.');
  }

  public render() {
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString('en', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'America/New_York'
        })}
      </div>
    );
  }
}

export default Timestamp;

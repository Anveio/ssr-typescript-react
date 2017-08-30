import * as React from 'react';

export interface Props {
  timestamp: Date;
}

class Timestamp extends React.PureComponent<Props, never> {
  private timeDisplay = (timestamp: Date) =>
    timestamp.toLocaleTimeString('en', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/New_York'
    });

  shouldComponentUpdate(nextProps: Props) {
    const currentTimeDisplay = this.timeDisplay(this.props.timestamp);

    const nextTimeDisplay = this.timeDisplay(nextProps.timestamp);

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

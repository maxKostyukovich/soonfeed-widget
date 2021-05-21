import React, {Component} from 'react';
import styles from './EventItem.module.sass'
import moment from "moment";
class EventItem extends Component {
    render() {
        const momentDate = moment(this.props.date);
        return (
            <div className={styles.wrapper}>
                <time dateTime={momentDate} className={styles.dateContainer}>
                    <span>{momentDate.format('MMMM d')}</span>
                    <span>{momentDate.format('HH:mm')}</span>
                </time>
                <div className={styles.eventLinkContainer}>
                    <a href={this.props.url}>{this.props.title}</a>
                </div>
            </div>
        );
    }
}

export default EventItem;
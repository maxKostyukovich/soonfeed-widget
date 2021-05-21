import {Component} from "react";
import styles from './EventList.module.sass'
import connect from 'react-redux/es/connect/connect'
import EventItem from "./EventItem/EventItem";
import {getEventsAction} from "../../actions/eventActions";

class EventList extends Component {
    componentDidMount() {
        this.props.getEventsAction();
    }

    render() {
        return (
            <main className={styles.wrapper}>
                {
                    this.props.events.map(event => {
                        return <EventItem url={event.url} date={event.date} title={event.title}/>
                    })
                }
            </main>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    getEventsAction: () => dispatch(getEventsAction()),
});

const mapStateToProps = (state) => {
    const { events } = state.eventReducer;
    return {
        events
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(EventList);
import { Component } from "react";
import styles from './MainPage.module.sass'
import Header from "../components/Header/Header";
import EventList from "../components/EventList/EventList";
class MainPage extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Header/>
                <EventList/>
            </div>
        );
    }
}

export default MainPage;
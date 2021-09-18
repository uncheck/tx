import { Switch, Route } from "react-router-dom";
import MyEvent from "./pages/MyEvent";
import Ticket from "./pages/Ticket";
import EmailConfirmation from "./pages/EmailConfirmation";
import Transferred from "./pages/Transferred";
import FeePage from "./pages/FeePage";

import hslot from "./assets/hslot.jpg";

const time = "12:48";
const events = {
  name: "Harry Styles: Love On Tour",
  title: "Harry Styles Presale Powered by Ticketmas..."
,  image: hslot,

// user info/client info --- email with your name on it
user: "example@gmail.com",

// fee & transfer info
success: true,
userName: "Vanessa",
clientName: "Andrea Martinez",
taxFee: 100,
paid: true,
// number of tickets
tix: 4,

    
  // edit here to change ticket state
  // if you edit the state also update 
  // the email confirmation below
  date: "Sat , Sep 25, 8PM • United Center",
  emailInfo: {
    date: "Sat • Sep 25, 2021 • 8:00 PM",
    location: "United Center — Chicago, IL",
  },

  // screen record countdown
  // Format "MM DD YY, h:mm a"
  countdown: "09 22 2021, 1:00 am",
  
  // Edit here to change seating position
  seatMap:  [
    {
      sec: "CHERRY",
      row: "GA3",
      seat: "-",
    },
    {
      sec: "CHERRY",
      row: "GA4",
      seat: "-",
    },
    {
      sec: "CHERRY",
      row: "GA6",
      seat: "-",
    },
    ]
  };

function App() {
  return (
    <Switch>
     
    
      <Route
        path="/myevent"
        render={(routeProps) => <MyEvent events={events} {...routeProps} />}
      />
      <Route
        path="/ticket"
        render={(routeProps) => <Ticket info={events} {...routeProps} time={time} />}
      />
      <Route
        path="/email"
        render={(routeProps) => (
          <EmailConfirmation
            {...routeProps}
            info={events}
            time={time}
          />
        )}
      />

      <Route
        path="/transfer"
        render={(routeProps) => <Transferred info={events} time={time} {...routeProps} />}
      />
     
      <Route
        path="/fee"
        render={(routeProps) => (
          <FeePage
            {...routeProps}
            info={events}
            time={time}
          />
        )}
      />
    </Switch>
  );
}

export default App;

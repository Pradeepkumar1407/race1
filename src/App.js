import './App.css';
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  var priceCards = [
    {
      plan: "Free",
      price: "0",
      buttonoutline: true,
      features: [
        {
          title: "10 users included",
        },
        {
          title: "2 GB of storage",
        },
        {
          title: "Email support",
        },
        {
          title: "Help center access"
        }

      ]
    },
    {
      plan: "Pro",
      price: "10",
      buttonoutline: false,
      features: [
        {
          title: "30 users included",
        },
        {
          title: "10 GB of storage",
        },
        {
          title: "Priority Email support",
        },
        {
          title: "Help center access"
        }

      ]

    },
    {
      plan: "Enterprise",
      price: "20",
      highlight: true,
      buttonoutline: false,
      features: [
        {
          title: "40 users included",
        },
        {
          title: "15 GB of storage",
        },
        {
          title: "Phone And Email support",
        },
        {
          title: "Help center access"
        }

      ]
    }
  ]
  return (
    <div className="container">
      <div className="row mt-3">
        {
          priceCards.map((card) => {
            return (<Card card={card} />)
          })
        }
      </div>
    </div>
  );
}

export default App;

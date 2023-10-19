import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BigCart from "./BigCart";
import "../index.css";

function Container() {
  const groupBy = useSelector((state) => state.grouping);

  const [combinedData, setCombinedData] = useState([]);
  const [groupedData, setGroupedData] = useState(null);

  const data = {
    tickets: [
      {
        id: "CAM-1",
        title: "Update User Profile Page UI",
        tag: ["Feature request"],
        userId: "usr-1",
        status: "Todo",
        priority: 4,
      },
      {
        id: "CAM-2",
        title:
          "Add Multi-Language Support - Enable multi-language support within the application.",
        tag: ["Feature Request"],
        userId: "usr-2",
        status: "In progress",
        priority: 3,
      },
      {
        id: "CAM-3",
        title: "Optimize Database Queries for Performance",
        tag: ["Feature Request"],
        userId: "usr-2",
        status: "In progress",
        priority: 1,
      },
      {
        id: "CAM-4",
        title: "Implement Email Notification System",
        tag: ["Feature Request"],
        userId: "usr-1",
        status: "In progress",
        priority: 3,
      },
      {
        id: "CAM-5",
        title: "Enhance Search Functionality",
        tag: ["Feature Request"],
        userId: "usr-5",
        status: "In progress",
        priority: 0,
      },
      {
        id: "CAM-6",
        title: "Third-Party Payment Gateway",
        tag: ["Feature Request"],
        userId: "usr-2",
        status: "Todo",
        priority: 1,
      },
      {
        id: "CAM-7",
        title: "Create Onboarding Tutorial for New Users",
        tag: ["Feature Request"],
        userId: "usr-1",
        status: "Backlog",
        priority: 2,
      },
      {
        id: "CAM-8",
        title: "Implement Role-Based Access Control (RBAC)",
        tag: ["Feature Request"],
        userId: "usr-3",
        status: "In progress",
        priority: 3,
      },
      {
        id: "CAM-9",
        title: "Upgrade Server Infrastructure",
        tag: ["Feature Request"],
        userId: "usr-5",
        status: "Todo",
        priority: 2,
      },
      {
        id: "CAM-10",
        title: "Conduct Security Vulnerability Assessment",
        tag: ["Feature Request"],
        userId: "usr-4",
        status: "Backlog",
        priority: 1,
      },
    ],
    users: [
      { id: "usr-1", name: "Anoop sharma", available: false },
      { id: "usr-2", name: "Yogesh", available: true },
      { id: "usr-3", name: "Shankar Kumar", available: true },
      { id: "usr-4", name: "Ramesh", available: true },
      { id: "usr-5", name: "Suresh", available: true },
    ],
  };

  useEffect(() => {
    if (data) {
      const userMapping = {};
      data.users.forEach((user) => {
        userMapping[user.id] = user;
      });
      data.tickets = data.tickets.map((ticket) => {
        const userId = ticket.userId;
        const user = userMapping[userId];
        if (user) {
          // Create a new object with "user" property added
          return { ...ticket, user };
        }
        return ticket;
      });
    }

    setCombinedData(data.tickets);
  }, []);

  useEffect(() => {
    if (groupBy === "status") {
      setGroupedData(groupByStatus(combinedData));
    } else if (groupBy === "priority") {
      setGroupedData(groupByPriority(combinedData));
    } else if (groupBy === "user") {
      setGroupedData(groupByUser(combinedData));
    }
  }, [groupBy, combinedData]);

  const groupByStatus = (data) => {
    return data?.reduce((result, ticket) => {
      const status = ticket.status;
      if (!result[status]) {
        result[status] = [];
      }
      result[status].push(ticket);
      return result;
    }, {});
  };

  const groupByPriority = (data) => {
    return data?.reduce((result, ticket) => {
      const priority = ticket.priority;
      if (!result[priority]) {
        result[priority] = [];
      }
      result[priority].push(ticket);
      return result;
    }, {});
  };

  const groupByUser = (data) => {
    return data?.reduce((result, ticket) => {
      const userName = ticket.user.name;
      if (!result[userName]) {
        result[userName] = [];
      }
      result[userName].push(ticket);
      return result;
    }, {});
  };

  const arr = [
    {
      prior: "No Priority",
    },
    {
      prior: "Low",
    },
    {
      prior: "Medium",
    },
    {
      prior: "High",
    },
    {
      prior: "Urgent",
    },
  ];

  return (
    <div className="container">
      {groupedData ? (
        Object.keys(groupedData).map((group) => (
          <div key={group} className="carts ">
            <div className="head">
              <h4>{groupBy === "priority" ? arr[group].prior : group}</h4>
              <div>
                <p>+</p>
              </div>
            </div>
            <BigCart data={groupedData[group]} />
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Container;

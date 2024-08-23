// src/data/dashboardData.js

const DashboardData = {
    categories: [
        {
            id: "1",
            name: "CSPM Executive Dashboard",
            widgets: [
                { id: "1", title: "Cloud Accounts", type: "chart", content: "Chart data here" },
                { id: "2", title: "Cloud Account Risk Assessment", type: "chart", content: "Chart data here" }
            ]
        },
        {
            id: "2",
            name: "CWPP Dashboard",
            widgets: [
                { id: "3", title: "Top 5 Namespace Specific Alerts", type: "empty", content: "No Graph data available" },
                { id: "4", title: "Workload Alerts", type: "empty", content: "No Graph data available" }
            ]
        },
        {
            id: "3",
            name: "Registry Scan",
            widgets: [
                { id: "5", title: "Image Risk Assessment", type: "chart", content: "Chart data here" },
                { id: "6", title: "Image Security Issues", type: "chart", content: "Chart data here" }
            ]
        }
    ]
};

export default DashboardData;

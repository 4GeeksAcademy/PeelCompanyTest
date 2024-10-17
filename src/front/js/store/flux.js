const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            demo: [
                { title: "FIRST", background: "white", initial: "white" },
                { title: "SECOND", background: "white", initial: "white" }
            ],
            users: [],
            subscriptions: []
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({ message: data.message });
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            signup: async (username, email, password) => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username, email, password })
                    });
                    const data = await resp.json();
                    if (resp.ok) {
                        console.log('User created:', data);
                        return true;
                    } else {
                        console.log('Error:', data.message);
                        return false;
                    }
                } catch (error) {
                    console.log("Error registering user", error);
                    return false;
                }
            },

            login: async (username, password) => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username, password })
                    });
                    const data = await resp.json();
                    if (resp.ok) {
                        console.log('Login successful:', data);
                        return true;
                    } else {
                        console.log('Error:', data.message);
                        return false;
                    }
                } catch (error) {
                    console.log("Error logging in", error);
                    return false;
                }
            },

            logout: async () => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/logout", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" }
                    });
                    const data = await resp.json();
                    if (resp.ok) {
                        console.log('Logout successful');
                        return true;
                    } else {
                        console.log('Error:', data.message);
                        return false;
                    }
                } catch (error) {
                    console.log("Error logging out", error);
                    return false;
                }
            },

            subscribeUser: async (user_id, subscription_type, duration_days) => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/subscribe", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ user_id, subscription_type, duration_days })
                    });
                    const data = await resp.json();
                    if (resp.ok) {
                        console.log('Subscription added:', data);
                        return true;
                    } else {
                        console.log('Error:', data.message);
                        return false;
                    }
                } catch (error) {
                    console.log("Error subscribing user", error);
                    return false;
                }
            }
        }
    };
};

export default getState;

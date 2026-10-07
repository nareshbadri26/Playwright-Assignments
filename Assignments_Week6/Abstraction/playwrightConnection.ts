import { MySqlConnection } from "./mySqlConnection";

class PlaywrightConnection extends MySqlConnection {

    connect(): void {

        console.log("Database connected");
    }

    disconnect(): void {

        console.log("Database disconnected");

    }

    executeUpdate(): void {

        console.log("Database update executed");

    }
}

const connection = new PlaywrightConnection();

connection.connect();
connection.executeUpdate();
connection.executeQuery();
connection.disconnect();
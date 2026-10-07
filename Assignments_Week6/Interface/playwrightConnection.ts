import { DatabaseConnection } from "./databaseConnection";


class PlaywrightConnection implements DatabaseConnection {

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
connection.disconnect();
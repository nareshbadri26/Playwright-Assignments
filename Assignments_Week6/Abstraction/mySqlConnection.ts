import { DatabaseConnection } from "../Interface/databaseConnection";

export abstract class MySqlConnection implements DatabaseConnection {

    abstract connect(): void;

    abstract disconnect(): void;

    abstract executeUpdate(): void;

    executeQuery(): void {
        
        console.log("Executing MySQL query");
    }
}
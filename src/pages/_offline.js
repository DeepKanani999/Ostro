export default function Offline() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <h1>You're Offline</h1>
            <p>
                It seems you're not connected to the internet. Please check your
                connection and try again.
            </p>
        </div>
    );
}
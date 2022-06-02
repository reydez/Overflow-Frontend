import GitHubIcon from "@mui/icons-material/GitHub";

export default function FormUser() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          margin: "15% auto",
          background: "white",
          width: "400px",
          height: "200px",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <GitHubIcon
          fontSize="large"
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 10px",
            borderRadius: "50px",
          }}
        />
        <a
          style={{
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            textDecoration: "none",
            color: "black",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 10px",
          }}
          href={`https://github.com/login/oauth/authorize?client_id=${"29c214f0eabafdd69c0c"}`}
        >
          Sing in with github
        </a>
      </div>
    </div>
  );
}

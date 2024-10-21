const ToastMessage = ({ title, type }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div
        style={{
          background:
            type == "success" ? "green" : type == "error" ? "red" : "gray",
          borderRadius: 10,
          marginTop: 30,
          padding: "5px 15px",
        }}
      >
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ToastMessage;

import useToast from "./components/Toast/useToast";

export default function Hello() {
  const toast = useToast();

  return (
    <div>
      <button
        onClick={() => {
          toast.succeess({ title: "hello toast" });
        }}
      >
        show me toast mssage
      </button>
    </div>
  );
}

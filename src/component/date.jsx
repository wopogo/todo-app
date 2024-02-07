const now = new Date();
const month = now.getMonth() + 1;
const day = now.getDate();

export default function CurrentDate() {
  return (
    <>
      <p style={{fontSize : "50px", margin: "50px 0 20px 0", fontWeight: "900"}}>
        {month} / {day}
      </p>
    </>
  );
}

export default function Sentence() {
  const style = { margin: "30px 0", fontWeight: "900", fontSize: "25px", marginTop: 0, marginBottom:0};
  return (
    <>
      <p className="sentence" style={style}>
        지금 이 인생을 다시 한번 똑같이 살아도 좋다는 마음으로 살아라
      </p>
      <p style={style}>
        -프리드리히 니체-
      </p>
    </>
  );
}

export default function Header() {
  const liStyle = "list-none font-normal text-[13px]";

  return (
    <header className="flex justify-between items-center px-[20px] py-[10px] bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-[20px]">
        <li className={liStyle}>로그인</li>
        <li className={liStyle}>회원가입</li>
        <li className={liStyle}>내클래스</li>
      </ul>
    </header>
  );
}

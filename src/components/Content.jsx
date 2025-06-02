export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img
        className="w-[300px] rounded-[10px] mb-[3px]"
        src={content.img}
        alt={content.title}
      />
      <span className="text-[12px] text-highlight border-[1px] border-solid border-highlight py-[4px] px-[5px] rounded-[3px]">
        모집중
      </span>
      <div className="font-semibold text-[16px]">{content.title}</div>
      <p className="text-[12px] text-[rgb(160,160,160)]">{content.subtitle}</p>
    </div>
  );
}

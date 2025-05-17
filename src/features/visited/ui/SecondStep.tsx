import ScoreSelector from "./ScoreSelector";

interface SecondData {
  plugScore: number | null;
  seatScore: number | null;
  crowdedScore: number | null;
  review: string;
}

interface SecondStepProps {
  secondData: SecondData;
  setSecondData: React.Dispatch<React.SetStateAction<SecondData>>;
}

const fields = [
  { label: "콘센트", key: "plugScore" },
  { label: "좌석", key: "seatScore" },
  { label: "혼잡도", key: "crowdedScore" },
] as const;

const SecondStep = ({ secondData, setSecondData }: SecondStepProps) => {
  return (
    <div className="flex flex-col gap-14 mt-8">
      <div className="flex flex-col gap-10">
        {fields.map(({ label, key }) => (
          <ScoreSelector
            key={label}
            label={label}
            score={secondData[key]}
            onChange={value => setSecondData(prev => ({ ...prev, [key]: value }))}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3 mb-[10px]">
        <div className="flex items-center gap-1">
          <span className="text-md font-semibold text-gray-60">방문 후기</span>
          <div className="text-sm font-medium text-gray-40 py-[2px] px-[6px] bg-gray-5 rounded-[6px]">선택</div>
        </div>
        <textarea
          className="p-4 outline-none rounded-2xl border border-gray-10 h-32 text-md font-medium text-gray-60 resize-none placeholder-gray-30"
          value={secondData.review}
          onChange={e =>
            setSecondData(prev => ({
              ...prev,
              review: e.target.value,
            }))
          }
          placeholder="친구가 이 곳을 궁금해하면, 어떻게 소개하시겠어요?"
        />
      </div>
    </div>
  );
};

export default SecondStep;

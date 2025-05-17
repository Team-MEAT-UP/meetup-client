interface StepIndicatorProps {
  step: number;
}

const StepIndicator = ({ step }: StepIndicatorProps) => {
  return <p className="text-md font-bold text-sub-sub">{step}/2</p>;
};

export default StepIndicator;

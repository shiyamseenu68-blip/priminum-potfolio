import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-amber-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

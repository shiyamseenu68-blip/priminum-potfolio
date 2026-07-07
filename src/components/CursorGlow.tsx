import { useMousePosition } from '../hooks/useMousePosition';

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="cursor-glow hidden md:block"
      style={{
        left: x,
        top: y,
      }}
    />
  );
}

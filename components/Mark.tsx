/** STAND's mark: a red and a blue ball resting against the white jack. */
export function Mark({ size = 34 }: { size?: number }) {
  return (
    <svg
      className="mark"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="21" cy="38" r="17" fill="var(--red)" />
      <circle cx="44" cy="24" r="17" fill="var(--blue)" />
      <circle cx="43" cy="47" r="10" fill="#fff" stroke="var(--ink)" strokeWidth="3" />
    </svg>
  );
}

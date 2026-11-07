export default function SectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  titlePrefix,
  highlightedWord,
  titleSuffix,
  subtitle
}) {
  return (
    <div className="section-header">
      {badge && (
        <div className="section-badge">
          {BadgeIcon && <BadgeIcon size={14} className="badge-icon" />}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="section-title">
        {titlePrefix && <span>{titlePrefix} </span>}
        {highlightedWord && <span className="gradient-text">{highlightedWord}</span>}
        {titleSuffix && <span> {titleSuffix}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

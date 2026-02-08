import React, { useState, useEffect, useCallback, useRef } from 'react';
import './CaseStudyCard.css';

export type CaseStudyLayout = 'text-left' | 'text-right';
export type CaseStudyGap = 'sm' | 'default' | 'lg';

export interface CaseStudyImage {
  src: string;
  alt: string;
  srcSet?: string;
}

export interface CaseStudyCardProps {
  /** Layout variant - text position relative to media */
  layout?: CaseStudyLayout;
  /** Gap size between content and media */
  gap?: CaseStudyGap;
  /** Optional overline/category text */
  overline?: string;
  /** Main headline text */
  headline: string;
  /** Description text or React node */
  description: React.ReactNode;
  /** Optional tags/categories */
  tags?: string[];
  /** CTA button or link element */
  cta?: React.ReactNode;
  /** Single image for the media section */
  image?: CaseStudyImage;
  /** Multiple images for slideshow */
  images?: CaseStudyImage[];
  /** Auto-play slideshow (default: true when images provided) */
  autoPlay?: boolean;
  /** Slideshow interval in milliseconds (default: 5000) */
  autoPlayInterval?: number;
  /** Whether to show slideshow controls (default: true) */
  showControls?: boolean;
  /** Optional link URL for the entire card */
  href?: string;
  /** Link target (default: _self) */
  target?: '_self' | '_blank';
  /** On mobile, show content first (default: false - media first) */
  mobileContentFirst?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for the card */
  onClick?: () => void;
}

/**
 * CaseStudyCard component following the Blue Rider Design System
 * A diptych-style component for showcasing case studies and projects
 */
export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  layout = 'text-left',
  gap = 'default',
  overline,
  headline,
  description,
  tags,
  cta,
  image,
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  href,
  target = '_self',
  mobileContentFirst = false,
  className = '',
  onClick,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [viewedSlides, setViewedSlides] = useState<Set<number>>(new Set([0]));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const hasSlideshow = images && images.length > 1;
  const displayImages = images || (image ? [image] : []);

  // Handle slideshow auto-play
  const startAutoPlay = useCallback(() => {
    if (!hasSlideshow || !isPlaying) return;

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % displayImages.length;
        setViewedSlides((viewed) => new Set([...viewed, next]));
        return next;
      });
    }, autoPlayInterval);
  }, [hasSlideshow, isPlaying, displayImages.length, autoPlayInterval]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isPlaying, startAutoPlay, stopAutoPlay]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setCurrentSlide(index);
    setViewedSlides((viewed) => new Set([...viewed, index]));
    if (isPlaying) {
      startAutoPlay();
    }
  };

  // Build class names
  const cardClasses = [
    'br-case-study-card',
    `br-case-study-card--${layout}`,
    gap !== 'default' ? `br-case-study-card--gap-${gap}` : '',
    mobileContentFirst ? 'br-case-study-card--mobile-content-first' : '',
    (href || onClick) ? 'br-case-study-card--clickable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Content section
  const contentSection = (
    <div className="br-case-study-card__content">
      {overline && (
        <p className="br-case-study-card__overline">{overline}</p>
      )}
      <h3 className="br-case-study-card__headline">{headline}</h3>
      <div className="br-case-study-card__description">
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>
      {tags && tags.length > 0 && (
        <div className="br-case-study-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="br-case-study-card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      {cta && <div className="br-case-study-card__cta">{cta}</div>}
    </div>
  );

  // Media section
  const mediaSection = (
    <div className="br-case-study-card__media">
      {hasSlideshow ? (
        <div className="br-case-study-card__slideshow">
          <div className="br-case-study-card__slides">
            {displayImages.map((img, index) => (
              <div
                key={index}
                className={`br-case-study-card__slide ${
                  index === currentSlide ? 'br-case-study-card__slide--active' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  srcSet={img.srcSet}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
          {showControls && (
            <div className="br-case-study-card__slideshow-controls">
              <button
                className="br-case-study-card__play-pause"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handlePlayPause();
                }}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="4" x2="6" y2="20" />
                    <line x1="18" y1="4" x2="18" y2="20" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>
              <div className="br-case-study-card__pagination">
                {displayImages.map((_, index) => (
                  <button
                    key={index}
                    className={`br-case-study-card__pagination-dot ${
                      index === currentSlide ? 'br-case-study-card__pagination-dot--active' : ''
                    } ${
                      viewedSlides.has(index) && index !== currentSlide
                        ? 'br-case-study-card__pagination-dot--viewed'
                        : ''
                    } ${
                      index === currentSlide && isPlaying
                        ? 'br-case-study-card__pagination-dot--animating'
                        : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDotClick(index);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : displayImages.length > 0 ? (
        <div className="br-case-study-card__image-wrapper">
          <img
            className="br-case-study-card__image"
            src={displayImages[0].src}
            alt={displayImages[0].alt}
            srcSet={displayImages[0].srcSet}
            loading="lazy"
          />
          <div className="br-case-study-card__image-overlay" />
        </div>
      ) : (
        <div className="br-case-study-card__image-wrapper">
          {/* Placeholder when no image */}
        </div>
      )}
    </div>
  );

  // Wrap in link if href provided
  if (href) {
    return (
      <article className={cardClasses}>
        <a href={href} target={target} className="br-case-study-card__link" rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {contentSection}
          {mediaSection}
        </a>
      </article>
    );
  }

  return (
    <article className={cardClasses} onClick={onClick}>
      {contentSection}
      {mediaSection}
    </article>
  );
};

export default CaseStudyCard;


import { useEffect, useRef } from 'react';
import styles from './page.module.css'

export default function AccordionItem({
  title,
  children,
  isOpen,
  onClick,
  itemRef
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  itemRef: (el: HTMLDivElement | null) => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      // Получаем реальную высоту контента
      const height = contentRef.current.scrollHeight;
      contentRef.current.style.height = '0px';
      // Запускаем анимацию

      
      requestAnimationFrame(() => {
        contentRef.current!.style.height = `${height}px`;
      });


      
    } else {
      contentRef.current.style.height = '0px';
    }

    if (isOpen && headerRef.current) {
      // Плавный скролл к заголовку
      headerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // выравнивание: начало элемента у верхнего края
        inline: 'center'
      });
    }
  }, [isOpen]);

  return (
    <div ref={itemRef} className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.accordionHeader}
        onClick={onClick}
        aria-expanded={isOpen}
        ref={headerRef}
        
      >
        <span className={`${styles.arrow}`}>
          ▶
        </span>
        {title}
      </button>
      <div
        ref={contentRef}
        className={styles.accordionContent}
        onTransitionEnd={() => {
          if (!isOpen && contentRef.current) {
            contentRef.current.style.height = '';
          }
        }}>

        {children}
        
      </div>
    </div>
  );
}
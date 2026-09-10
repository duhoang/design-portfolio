import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type LightboxContextValue = {
  open: (src: string) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within <LightboxProvider>');
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);

  const open = useCallback((next: string) => setSrc(next), []);
  const close = useCallback(() => setSrc(null), []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <div
        className={src ? 'lightbox open' : 'lightbox'}
        onClick={close}
        aria-hidden={src ? undefined : true}
      >
        <div
          className="lightbox-image"
          style={src ? { backgroundImage: `url(${src})` } : undefined}
        />
      </div>
    </LightboxContext.Provider>
  );
}

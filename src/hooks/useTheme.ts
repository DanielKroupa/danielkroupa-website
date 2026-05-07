import { useCallback, useEffect, useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

// useLayoutEffect causes a server warning — use useEffect on the server (no-op)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // localStorage unavailable (e.g. private browsing with strict settings)
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyThemeToDOM(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Synchronously apply theme to DOM before browser paints (prevents flash in CSR)
  useIsomorphicLayoutEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  useEffect(() => {
    // Keep local state in sync if OS preference changes and user has no stored choice
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleOsChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handleOsChange);
    } else {
      media.addListener(handleOsChange);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", handleOsChange);
      } else {
        media.removeListener(handleOsChange);
      }
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable
    }
    setTheme(next);
    // DOM update is handled by useIsomorphicLayoutEffect above
  }, [theme]);

  return { theme, toggleTheme };
}

import { useRef, useEffect } from 'react'

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);
  const oldTitle = `Omar`
  useEffect(() => {
    document.title = oldTitle + " - " + title;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [])
}

export default useDocumentTitle
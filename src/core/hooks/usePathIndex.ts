import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { linksList } from '../constants/navigationList';

export const usePathIndex = () => {
  const [pathIndex, setPathIndex] = useState<null | number>(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.hash ? `/${location.hash}` : location.pathname;
    const index = linksList.map(item => item.path).indexOf(path);
    setPathIndex(index);
  }, [location]);

  return [pathIndex];
};

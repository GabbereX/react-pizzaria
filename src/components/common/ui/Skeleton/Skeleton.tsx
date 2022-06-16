import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={293}
      height={522}
      viewBox='0 0 293 522'
      backgroundColor='#f2f2f2'
      foregroundColor='#ecebeb'
    >
      <circle cx='135' cy='135' r='135' />
      <rect x='15' y='302' rx='7' ry='7' width='263' height='56' />
      <rect x='15' y='376' rx='7' ry='7' width='263' height='76' />
      <rect x='19' y='476' rx='0' ry='0' width='105' height='31' />
      <rect x='166' y='476' rx='0' ry='0' width='105' height='31' />
    </ContentLoader>
  );
};

export default Skeleton;

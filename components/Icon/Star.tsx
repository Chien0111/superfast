import { IconProps } from './index.type';

const Star = ({ className }: IconProps) => {
  return (
    <div className={`${className ? className : ''}`}>
      <svg
        width='16'
        height='15'
        viewBox='0 0 16 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0Z'
          fill='url(#paint0_linear_4841_5100)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_4841_5100'
            x1='2.51429'
            y1='1.71429'
            x2='14.7429'
            y2='16'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#EC8F41' />
            <stop offset='1' stopColor='#F5BC4E' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Star;

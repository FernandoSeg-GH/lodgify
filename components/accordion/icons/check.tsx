import React from 'react';

type Props = {
       checked: boolean;
};

const CheckIcon: React.FC<Props> = ({ checked }) => {
       return (
              <div className={`transform transition-transform ${checked ? 'scale-100' : 'scale-0'}`}>
                     <svg
                            fill="#ffffff"
                            height="16px"
                            width="16px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                     >
                            <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6 12-12-1.4-1.4z" />
                     </svg>
              </div>
       );
};

export default CheckIcon;

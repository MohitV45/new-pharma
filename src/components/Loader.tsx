import styled from 'styled-components';
import logo from '../assets/Retlsen_logo-removebg-preview.png';

const Loader = ({ fading }: { fading: boolean }) => {
  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <LogoWrapper>
        <div className="container">
          <span />
          <span />
          <span />
          <span />
          <div className="logo-center">
            <img src={logo} alt="Retlsen" />
          </div>
        </div>
      </LogoWrapper>
    </div>
  );
}

const LogoWrapper = styled.div`
  .container {
    position: relative;
    border-radius: 50%;
    height: 96px;
    width: 96px;
    animation: rotate_3922 1.5s linear infinite;
    background-color: #d97706; /* amber-600 */
    background-image: linear-gradient(#d97706, #fbbf24, #f59e0b);

    @media (min-width: 768px) {
      height: 120px;
      width: 120px;
    }
  }

  .container span {
    position: absolute;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background-color: #d97706;
    background-image: linear-gradient(#d97706, #fbbf24, #f59e0b);
  }

  .container span:nth-of-type(1) { filter: blur(5px); }
  .container span:nth-of-type(2) { filter: blur(10px); }
  .container span:nth-of-type(3) { filter: blur(25px); }
  .container span:nth-of-type(4) { filter: blur(50px); }

  .container::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    background-color: #fff;
    border-radius: 50%;

    @media (min-width: 768px) {
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
    }
  }

  .logo-center {
    position: absolute;
    inset: 8px;
    background: white;
    border-radius: 50%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    /* Counter-rotate to keep logo upright */
    animation: counter_rotate 1.5s linear infinite;

    @media (min-width: 768px) {
      inset: 10px;
      padding: 12px;
    }
  }

  .logo-center img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @keyframes rotate_3922 {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes counter_rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
`;

export default Loader;

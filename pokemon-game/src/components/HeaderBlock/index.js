import style from './style.module.css';

import ReactLogo from '../../assets/ReactLogo.png';

import { ReactComponent as ReactLogo1 } from '../../assets/Trees.svg';

const HeaderBlock = ({title, hideBackground = false, descr }) => {
    const styleRoot = hideBackground ? {backgroundImage: 'none'} : {}

    return (
        <div className={style.root}>
            <div className={style.container}>
                <ReactLogo1/>
                {/* { <img src={ReactLogo} alt="React Logo" /> } */}
                { 
                title && (<h1 className={style.header}>
                {title}
                </h1>) }
                { descr && <p className={style.paragraph}> Simple Triple Triad Card Game</p>}
            </div>
        </div>
    );
}

export default HeaderBlock;
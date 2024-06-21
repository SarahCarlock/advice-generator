import './adviceContainerStyles.css';
import MobileDivider from "./pattern-divider-mobile.js";
import DesktopDivider from "./pattern-divider-desktop.js";
import DiceIcon from './icon-dice.js';
import TempResponse from '../advice/Advice.js';

export default function AdviceContainer() {

    return (
        <div className="advice-container">
                <TempResponse />
                <div className="divider-mobile">
                    <MobileDivider id="mobile"/>
                </div>
                <div className="divider-desktop">
                    <DesktopDivider id="desktop"/>
                </div>
                <div className='diceSplitColor'>
                    <div className='diceIcon' id='diceIcon'>
                        <DiceIcon />
                    </div>
                </div>
            
        </div>
    );
};
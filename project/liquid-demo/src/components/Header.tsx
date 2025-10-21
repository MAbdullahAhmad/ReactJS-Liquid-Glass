import LiquidGlass from 'liquid-glass-react';

type HeaderProps = {
    containerRef: React.RefObject<HTMLDivElement | null> | null;
};

export default function Header({ containerRef = null }: HeaderProps) {
    return (
        <LiquidGlass
            mouseContainer={containerRef}
            displacementScale={15}
            blurAmount={0.0}
            saturation={120}
            aberrationIntensity={0.2}
            elasticity={0.5}
            cornerRadius={100}
            // overLight={true}
            // padding="8px 16px"
            style={{ position: 'fixed', top: '80px', left: '50%', zIndex: 99 }}
        >
            <div className="flex items-center space-x-6 w-fit" style={{background:'#0000'}}>
                <h1 className="text-xl font-bold text-white mix-blend-difference">LiquidDemo</h1>
                <nav className="flex space-x-4">
                    <button className="text-gray-300 mix-blend-difference hover:text-gray-400 font-medium" style={{ cursor: 'pointer' }}>About</button>
                    <button className="text-gray-300 mix-blend-difference hover:text-gray-400 font-medium" style={{ cursor: 'pointer' }}>Login</button>
                </nav>
            </div>
        </LiquidGlass>
    );
}

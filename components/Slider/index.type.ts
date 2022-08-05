export type SliderProps = {
    content: { content: any }[];
    className?: string;
    align?: "align-left" | "align-right";
    settings?: any;
    showArrow?: boolean;
    showDots?: boolean;
    styleDot?: number | string;
    width?: number | string;
    positionItems?: "top" | "bottom" | "center";
};
export type arrowProps = {
    className?: string;
    style?: string;
    onClick?: () => void;
};

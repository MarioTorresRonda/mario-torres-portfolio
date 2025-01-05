import {faExpandAlt as expandIcon, faCompressAlt as shrinkIcon} from "@fortawesome/free-solid-svg-icons";

export const notMinimizedObj = {
    value: false,
    icon: {
        svg: shrinkIcon,
        text: ["commons", "codeBox", "shrinkCode"],
    },
};
export const minimizedObj = {
    value: true,
    icon: {
        svg: expandIcon,
        text: ["commons", "codeBox", "expandCode"],
    },
};
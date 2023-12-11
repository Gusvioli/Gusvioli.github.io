const btnLFunc = (cross: number, tam: number): number => {
    return cross - 3 < 1 ? (cross - 3) + tam : cross - 3
};
const btnRFunc = (cross: number, tam: number): number => {
    return cross + 3 > tam ? (cross + 3) - tam : cross + 3
};

export {
    btnLFunc,
    btnRFunc
}
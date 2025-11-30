
export const useTrimAddress =  (address: string | undefined| null, leftLength = 6, rightLength = 5) =>
    address ? `${address?.slice(0, leftLength)}....${address?.slice(-rightLength)}` : "";

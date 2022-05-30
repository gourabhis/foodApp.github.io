export const Add= (item) =>
{
    return {
        type:"ADD_CART",
        payload:item
    }
}
export const DLT= (id) => {
    return {
        type: "RMV_CART",
        payload:id
    }
}
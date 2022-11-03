export const storeInfo = info => {
  return {
    type: 'add_info',
    payload: {
      val: info,
    },
  };
};

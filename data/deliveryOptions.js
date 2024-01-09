export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  // Note: this code is a bit different from the video
  // because if you start directly from lesson 16, you
  // might not have deliveryOptionIds saved in localStorage.
  // In this case, this code will default to the first
  // delivery option.
  return deliveryOption || deliveryOption[0];
}
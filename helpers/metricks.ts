export type EventNameType = `userParams` | `init` | `addFileExtension` | `extLink` | `file` | `getClientID` | `hit`
  | `notBounce` | `params` | `reachGoal` | `replacePhones` | `setUserID`

export type ActionType =
  "impressions"
  | "click"
  | "detail"
  | "add"
  | "remove"
  | "purchase"
  | "promoView"
  | "promoClick";

interface ActionField {
  id: string;
  goal_id?: string;
}

interface ProductType {
  id: string;
  name: string;
  category?: string;
  price?: string;
  variant?: string;
}

interface ActionObjectType {
  actionField?: ActionField;
  products?: ProductType[];
}

export type EcommerceType = {
  ecommerce: {
    currencyCode: string;
  } & { [key in ActionType]?: ActionObjectType };
}

export const sendMetric = (eventName: EventNameType,
  options: {url?: string, options: string | {[key: string]: string}}) => {
  try {
    if (window.ym) {
      // @ts-expect-error 123
      window.ym(79791280, eventName, options.options);

      if (options.url) {
        // @ts-expect-error 123
        window.ym(79791280, eventName, options.url, options.options);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const sendEcommerce = ({
  actionType,
  actionField,
  products,
}: {actionType: ActionType, actionField?: ActionField, products?: ProductType[]}) => {
  const ecommerceObj: EcommerceType = {
    ecommerce: {
      currencyCode: "RUB",
      [actionType]: {
        actionField,
        products,
      },
    },
  };

  // @ts-expect-error 123
  window.dataLayer.push(ecommerceObj);
};

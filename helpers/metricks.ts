export type EventNameType = `userParams` | `init` | `addFileExtension` | `extLink` | `file` | `getClientID` | `hit`
  | `notBounce` | `params` | `reachGoal` | `replacePhones` | `setUserID`

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

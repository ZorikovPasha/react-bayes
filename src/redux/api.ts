export const fetchItems = (keyName: string, useStateFunc: React.Dispatch<React.SetStateAction<any>>): void => {
  // try {
  //   fetch("https://distracted-clarke-2debdf.netlify.app/db.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       useStateFunc(data[keyName]);
  //     });
  // } catch (er) {
  //   alert(er);
  // }
};

export const fetchItemsThunk = (keyName: string, dispatchFunc: any, ActionCreator: (arr: []) => void) => {
  // try {
  //   fetch("https://distracted-clarke-2debdf.netlify.app/db.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       dispatchFunc(ActionCreator(data[keyName]));
  //     });
  // } catch (er) {
  //   alert(er);
  // }
};

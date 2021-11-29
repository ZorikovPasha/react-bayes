import { featuresActionCreatorType } from "./redux/types";

export const fetchFeatures = (dispatch: any, id: number, featuresActionCreator: featuresActionCreatorType ) => {
  try {
    fetch("http://localhost:3000/db.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        const features = data.v1.stats.features["0"][`${id}`];
        return features;
      })
      .then((features) => {
        dispatch(featuresActionCreator(features))
      })
  } catch (error){
    console.log(error);
  }
}
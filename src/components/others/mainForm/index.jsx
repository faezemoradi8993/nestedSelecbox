import React, { useReducer } from "react";
import { provinces, cities } from "constants/dataProvince";
import { Label, SelectBox } from "components/elements";

const initState = {
  province: 0,
  city: cities.filter?.((c) => c?.p_Id == 0)?.[0]?.id,
  cities: cities.filter?.((c) => c?.p_Id == 0),
};
// const initState = {
//   province: -1,
//   city: -1,
//   cities: [],
// };

function useAction(state, action) {

  switch (action.type) {

    case "setProvince":
      {
        return {
          ...state,
          province: action?.id,
          cities: cities.filter((c) => c?.p_Id == action?.id),
          city: cities.filter((c) => c?.p_Id == action?.id)?.[0]?.id,
        };
      }
    case "setCity":
      {
        return {
          ...state,
          city: action?.id,
        };
      }
    default:
      return { ...state };
  }
}


function MainForm() {
  const [state, dispatchSelects] = useReducer(useAction, initState);
  const submitHandler = () => {
    console.log(state)
  }
  return (
    <React.Fragment>
      <div>
        <div>
          <form>
            <div>
              <Label name="استان :" />
              <SelectBox
                options={provinces}
                value={state?.province}
                name="country"
                placeholder="انتخاب استان "
                onChange={e => {
                  console.log("province", e.target.value);
                  dispatchSelects({
                    type: 'setProvince',
                    id: e.target.value,
                  })
                }}
              />
            </div>

            <div>
              <Label name="شهر :" />
              <SelectBox
                options={state?.cities}
                name="city"
                placeholder="انتخاب شهر "
                onChange={e => {
                  console.log("city", e.target.value);
                  dispatchSelects({
                    type: 'setCity',
                    id: e.target.value,
                  })
                }}
                value={state?.city}
              />
            </div>

            <div className="App-header">
              <button type="button" onClick={submitHandler}>ثبت </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainForm;

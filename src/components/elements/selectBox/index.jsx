function SelectBox({ options, ...restProps }) {
  let random = Math.floor(Math.random() * 1000)
  return (
    <select
      {...restProps}
    >
      {options?.map?.((p, index) => {
        return (
          <option key={`input-${random}-${index}`} value={p?.id}>
            {p?.name}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;

// TODO:
// 0. pass value and dispatcher to City and Province components (dont use prop drilling)
// 1. Filter City list by province id
// 2. complete state interaction between province and city in reducer

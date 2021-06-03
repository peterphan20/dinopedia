export const sortedList = (arr) => arr.sort((a,b) => (a.name < b.name ? -1 : 1)).filter((card) => {
  if (card === "") {
    return true;
  }
})
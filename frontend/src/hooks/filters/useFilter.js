const useFilter = (array, filterString, filterProperty) => {
  if (filterString && array?.length > 0) {
    const filterCategoriesString = JSON.stringify(array);
    const categories = JSON.parse(filterCategoriesString);
    switch (filterString) {
      case "atoz":
        return categories.sort((a, b) =>
          a[filterProperty] > b[filterProperty]
            ? 1
            : b[filterProperty] > a[filterProperty]
            ? -1
            : 0
        );
      case "ztoa":
        return categories.sort((a, b) =>
          a[filterProperty] < b[filterProperty]
            ? 1
            : b[filterProperty] < a[filterProperty]
            ? -1
            : 0
        );
      case "recent":
        return categories.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
      case "oldest":
        return categories.sort(
          (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
        );
      // case "published":
      //   return categories.filter((item) => item.status === "published");
      // case "pending":
      //   return categories.filter((item) => item.status === "pending");

      default:
        return categories;
    }
  }
};

export default useFilter;

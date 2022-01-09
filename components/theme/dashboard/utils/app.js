export const createBreadCrumbs = (currentRoute, list = [], index = 0) => {
  console.log(currentRoute, 'd')
    if (currentRoute) {
      //console.log('1')
      let text = currentRoute.meta.title
        ? currentRoute.meta.title
        : currentRoute.resourceName || currentRoute.name;
      list.push({
        text,
        disabled: index === 0 || currentRoute.path === null,
        href: currentRoute.path,
        index,
      });
  
      if (currentRoute.meta && currentRoute.meta.parent) {
        //console.log('2')
        createBreadCrumbs(currentRoute.meta.parent, list, ++index);
      }
    }
    list.sort((o1, o2) => o2.index - o1.index);
    //console.log(list)
    return list;
  };
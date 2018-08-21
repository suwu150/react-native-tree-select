/* eslint-disable */
export const breadthFirstRecursion = (treeData, params) => {
  /**
   *  树结构广度优先遍历
   * @param treeData 树形结构数组数据, type=array
   * @params params：参数,用于说明_menus中父子节点的名称, type=object
   * */
    params = {
        sortCodeName: params && params.sortCodeName ? params.sortCodeName : 'sortCode',
        parentName: params && params.parentName ? params.parentName : 'parent',
        childrenName: params && params.childrenName ? params.childrenName : 'children',
    };
    let childrenNodes = [],
        children = params.childrenName,
        nodes = treeData;
    for (let item in treeData) {
        if (treeData[item][children]) {
            let temp = treeData[item][children];
            childrenNodes = childrenNodes.concat(temp);
        }
    }
    if (childrenNodes.length > 0) {
        nodes = nodes.concat(breadthFirstRecursion(childrenNodes, params));
    }
    return nodes;
};


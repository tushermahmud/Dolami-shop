import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { seasons, allProducts } from "../sampleData";
import { useEffect, useState } from "react";
import "../styles/sidebar.css";
export default function Sidebar({
  setCategory,
  setProductsList,
  setBreadcrumbs,
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(allProducts);
    return () => setProducts([]);
  }, [products]);

  const getChildren = (children, child = []) => {
    if (children && children.children && children.children.length)
      for (let node of children.children) {
        children.children.forEach((c) => {
          if (child && child.findIndex((ch) => ch === c.id) < 0) {
            child.push(c.id);
          }
          return getChildren(node, child);
        });
      }
    return child;
  };
  const getAncestors = (target, children, ancestorsArr = []) => {
    if (children && children.length) {
      for (let node of children) {
        if (node.id === target) {
          return getChildren(node);
        }
        const found = getAncestors(
          target,
          node.children,
          ancestorsArr.concat(node)
        );
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  };

  const handleClick = (id) => {
    setCategory(id);
    let categoryAndAncestors = getAncestors(id, seasons);
    let categoryIds = categoryAndAncestors;
    categoryIds = [...categoryIds, id];
    const results = products.filter((item) =>
      categoryIds.some(
        (catId) => item.category === catId || item.category === id
      )
    );

    let allBreadcumb = getParentsBreadCrumbs(id, seasons);
    setBreadcrumbs(allBreadcumb);
    setProductsList(results);
  };

  const getParentsBreadCrumbs = (target, children, ancestorsArr = []) => {
    if (children && children.length) {
      for (let node of children) {
        if (node.id === target) {
          return ancestorsArr.concat(node);
        }
        const found = getParentsBreadCrumbs(
          target,
          node.children,
          ancestorsArr.concat(node)
        );
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  };
  const getTreeItemsFromData = (treeItems) => {
    return treeItems.map((treeItemData) => {
      let children = undefined;
      if (treeItemData.children && treeItemData.children.length > 0) {
        children = getTreeItemsFromData(treeItemData.children);
      }
      return (
        <TreeItem
          onClick={() => handleClick(treeItemData.id)}
          style={{ textAlign: "left" }}
          key={treeItemData.id}
          nodeId={treeItemData.id.toString()}
          label={treeItemData.name}
          children={children}
        />
      );
    });
  };
  return (
    <div className="col-span-2">
      <div className="h-[90vh] overflow-y-auto fixed top-16 w-[24%]">
        <div className="text-left p-2">
          <span className="text-left font-bold text-base block">Category</span>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {getTreeItemsFromData(seasons)}
          </TreeView>
        </div>
        <div className="text-left p-2">
          <span className="text-left font-bold text-base block">Contents</span>
          <label className="block py-1">
            <input type="checkbox" /> VRChat(Quest)
          </label>
          <label className="block py-1">
            <input type="checkbox" /> VRChat(PCVR)
          </label>
          <label className="block py-1">
            <input type="checkbox" /> Others
          </label>
        </div>
        <div className="text-left p-2">
          <span className="text-left font-bold text-base block">Price</span>
          <label className="block py-1">
            <input type="checkbox" /> Under $10
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $10 to $20
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $20 to $30
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $30 to $40
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $40 to $50
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $50 to $60
          </label>
        </div>
        <div className="text-left p-2">
          <span className="text-left font-bold text-base block">
            Polygon Amount
          </span>
          <label className="block py-1">
            <input type="checkbox" /> Under $10
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $10 to $20
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $20 to $30
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $30 to $40
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $40 to $50
          </label>
          <label className="block py-1">
            <input type="checkbox" /> $50 to $60
          </label>
        </div>
        <div className="text-left p-2">
          <span className="text-left font-bold text-base block">
            Auto Upload Support
          </span>
          <label className="block py-1">
            <input type="checkbox" /> Supported
          </label>
          <label className="block py-1">
            <input type="checkbox" /> Unsupported
          </label>
        </div>
      </div>
    </div>
  );
}

import React, { useState, createContext } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetsContext = createContext("");
export const MoneyContext = createContext("");

const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const asset = "diamond";
  const newAsset = "gold";

  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h4>Total Family Asset {money}</h4>

      
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetsContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetsContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default FamilyTree;


//Components
import { AddNew } from "./components/AddNew";
import { RingProgress } from "./components/RingProgress";
import { Transaction } from "./components/Transaction";

export function Cards() {
  return (
    <>  
      <div className="relativeClass">
        <Transaction ></Transaction>
        <RingProgress></RingProgress>
        <AddNew className="child2"></AddNew>
      </div>
    </>
  );
}

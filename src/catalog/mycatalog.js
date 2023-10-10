import * as Areas from "./areas/area/planner-element";
import * as Lines from "./lines/wall/planner-element.jsx";
import Door from "./holes/door/planner-element.jsx";
import DoorDouble from "./holes/door-double/planner-element.jsx";
import PanicDoor from "./holes/panic-door/planner-element.jsx";
import PanicDoorDouble from "./holes/panic-door-double/planner-element.jsx";
import SlidingDoor from "./holes/sliding-door/planner-element.jsx";
import Window from "./holes/window/planner-element.jsx";
import SashWindow from "./holes/sash-window/planner-element.jsx";
import VenetianBlindWindow from "./holes/venetian-blind-window/planner-element.jsx";
import WindowCurtain from "./holes/window-curtain/planner-element.jsx";
import Image from "./items/image/planner-element.jsx";
// import * as Holes from "./holes/**/planner-element.jsx";
// import * as Items from "./items/**/planner-element.jsx";
import { Catalog } from "react-planner";
let catalog = new Catalog();

for (let x in Areas) catalog.registerElement(Areas[x]);
for (let x in Lines) catalog.registerElement(Lines[x]);
catalog.registerElement(Door);
catalog.registerElement(DoorDouble);
catalog.registerElement(PanicDoor);
catalog.registerElement(PanicDoorDouble);
catalog.registerElement(SlidingDoor);
catalog.registerElement(Window);
catalog.registerElement(SashWindow);
catalog.registerElement(VenetianBlindWindow);
catalog.registerElement(WindowCurtain);
catalog.registerElement(Image);

// for (let x in Holes) catalog.registerElement(Holes[x]);
// for (let x in Items) catalog.registerElement(Items[x]);

catalog.registerCategory("windows", "Windows", [
  Window,
  SashWindow,
  VenetianBlindWindow,
  WindowCurtain,
]);
catalog.registerCategory("doors", "Doors", [
  Door,
  DoorDouble,
  PanicDoor,
  PanicDoorDouble,
  SlidingDoor,
]);

export default catalog;

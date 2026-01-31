import React from "react";
import { Stick } from "./Stick";
import { Draggable } from "./Draggable";

export const Puppet = () => {
  return (
    <Draggable>

<div style={{ position: "relative", width: "400px", height: "200px", margin: "50px" }}>
{/* Main stick */}
<Stick
length={200}
rotation={0}
rotationOffset={0}
childAxes={[0, 0, 200, 200]} // positions of the 4 children
>
{/* Child sticks */}
<Stick length={100} rotation={-30} />
<Stick length={50} rotation={-45} />
<Stick length={50} rotation={30} />
<Stick length={50} rotation={45} />
</Stick>
</div>

    </Draggable>
  );
};

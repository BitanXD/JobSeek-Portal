import { Avatar, Indicator } from "@mantine/core";
import { IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 text-white h-20 flex justify-between px-6 items-center">
      <div className="flex gap-2 items-center text-bright-sun-400">
        <IconAsset className="h-9 w-9" stroke={1.25} />
        <div className="text-3xl font-semibold">JobScope</div>
      </div>
      <NavLinks />
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-2">
          <div>Bitan</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.35} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="brightSun.4" size={9} offset={4} processing>
            <IconBell stroke={1.35} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};
export default Header;

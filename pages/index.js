import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "./api/Button";
import Text from "./api/Text";
import {
  faCalendar,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Input } from "./api/Input/Input";

const inter = Inter({ subsets: ["latin"] });

const ButtonCardGroup = (props) => {
  const { color, textColor, leftIcon } = props;
  return (
    <div className="bg-white border-dashed border p-3 border-blue-500 grid grid-cols-3 ">
      <div>
        <div className="flex h-20">
          <Text className="py-2 px-4 my-auto">Default</Text>
        </div>
        <div className="flex h-20">
          <Text className="py-2 px-4 my-auto">Hover</Text>
        </div>
        <div className="flex h-20">
          <Text className="py-2 px-4 my-auto">Focus</Text>
        </div>
        <div className="flex h-20">
          <Text className="py-2 px-4 my-auto">Disabled</Text>
        </div>
      </div>
      <div className=" col-span-2 border-solid border-blue-500 border rounded-md text-center">
        <div className="p-5">
          <Button leftIcon={leftIcon} color={color} textColor={textColor}>
            {" "}
            Button CTA{" "}
          </Button>
        </div>
        <div className="p-5">
          <Button leftIcon={leftIcon} color={color} textColor={textColor}>
            {" "}
            Button CTA{" "}
          </Button>
        </div>
        <div className="p-5">
          <Button leftIcon={leftIcon} color={color} textColor={textColor} focus>
            {" "}
            Button CTA{" "}
          </Button>
        </div>
        <div className="p-5">
          <Button
            leftIcon={leftIcon}
            color={color}
            textColor={textColor}
            disabled
          >
            {" "}
            Button CTA{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

const InputCardGroup = (props) => {
  const { iconLeft, iconRight, type, placeholder } = props;
  return (
    <div className="bg-white border-dashed border p-3 border-blue-500">
      <div className="p-5">
        <Input
          type={type}
          iconLeft={iconLeft}
          iconRight={iconRight}
          placeholder={placeholder}
        />
      </div>
      <div className="p-5">
        <Input
          type={type}
          iconLeft={iconLeft}
          iconRight={iconRight}
          placeholder={placeholder}
        />
      </div>
      <div className="p-5">
        <Input
          type={type}
          iconLeft={iconLeft}
          iconRight={iconRight}
          placeholder={placeholder}
        />
      </div>
      <div className="p-5">
        <Input
          type={type}
          disabled={true}
          iconLeft={iconLeft}
          iconRight={iconRight}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="p-2 bg-red-500 grid grid-cols-4">
      <ButtonCardGroup leftIcon={faPlus} />
      <ButtonCardGroup />
      <ButtonCardGroup color={"white"} leftIcon={faPlus} textColor={"gray"} />
      <ButtonCardGroup color={"white"} textColor={"gray"} />
      <ButtonCardGroup color={"red"} />
      <InputCardGroup
        type="text"
        placeholder="Search App"
        iconLeft={faSearch}
      />
      <InputCardGroup
        type="date"
        placeholder="Select date..."
        iconRight={faCalendar}
      />
    </div>
  );
}

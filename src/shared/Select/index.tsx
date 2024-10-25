import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

type ILabelOptions = {
  label: string;
  value: string;
};
export type Props = {
  options: ILabelOptions[];
  placeholder: string
};
const MySelect = ({ options , placeholder}: Props) => (
  <Select.Root>
    <Select.Trigger className="inline-flex items-center justify-between w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
      <Select.Value placeholder={placeholder} />
      <Select.Icon className="ml-2">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="z-10 mt-2 overflow-hidden bg-white border border-gray-300 rounded-md shadow-lg">
        <Select.ScrollUpButton className="flex items-center justify-center p-1 bg-gray-100">
          <ChevronUpIcon />
        </Select.ScrollUpButton>

        <Select.Viewport className="p-2">
          {options.map((option) => (
            <Select.Item
              value={option.value}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 focus:bg-gray-300 rounded"
            >
              <Select.ItemText>{option.label}</Select.ItemText>
            </Select.Item>
          ))}
          {/* <Select.Item
            value="option1"
            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 focus:bg-gray-300 rounded"
          >
            <Select.ItemText>Option 1</Select.ItemText>
          </Select.Item> */}
          {/* <Select.Item
            value="option2"
            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 focus:bg-gray-300 rounded"
          >
            <Select.ItemText>Option 2</Select.ItemText>
          </Select.Item>
          <Select.Item
            value="option3"
            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 focus:bg-gray-300 rounded"
          >
            <Select.ItemText>Option 3</Select.ItemText>
          </Select.Item> */}
        </Select.Viewport>

        <Select.ScrollDownButton className="flex items-center justify-center p-1 bg-gray-100">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default MySelect;

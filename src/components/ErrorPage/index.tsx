import { useRouteError } from "react-router-dom";
import { IErrorPageResponse } from "./interface";
import {  Flex, Heading, Text } from "@radix-ui/themes";


const ErrorPage = () => {
     const error = useRouteError() as IErrorPageResponse;
  return (
    <Flex direction={"column"} align={"center"} justify={"center"} gapY={"20"}>
      <Heading size={"6"} weight={"medium"}>
        Oops!
      </Heading>
      <Text size={"4"}>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <i>{(error.statusText as string) || (error.error.message as string)}</i>
      </Text>
    </Flex>
  );
}

export default ErrorPage
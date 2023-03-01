import { Button, Stack, Title } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import { sendUnimplemented } from "../util/unimplemented";

export const Home: FC = () => {
    return (
        <Stack>
            <Title align="center">Home</Title>
            <Link to={"meta"}>
                <Button fullWidth p={"xs"} my={"sm"}>
                    Create new scout entry
                </Button>
            </Link>
            <Button
                fullWidth
                p={"xs"}
                my={"sm"}
                onClick={() => sendUnimplemented()}
            >
                View local data
            </Button>
        </Stack>
    );
};